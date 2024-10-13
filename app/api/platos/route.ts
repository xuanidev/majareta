import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Función para verificar si la solicitud es del servidor
function isServerRequest(request: Request) {
  return request.headers.get('x-server-request') === process.env.NEXT_PUBLIC_SERVER_SECRET;
}

// Middleware para verificar la autenticación
async function authMiddleware(request: Request) {
  if (!isServerRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

// Método para obtener todos los platos
export async function GET(request: Request) {
  // Ejecuta el middleware de autenticación
  const authResponse = await authMiddleware(request);
  if (authResponse) return authResponse;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    return await getById(request); 
  }

  const products = await sql`SELECT *, type FROM menu;`;

  if (products.rows.length === 0) {
    return NextResponse.json({ error: 'No products available' }, { status: 404 });
  }

  return NextResponse.json(products.rows);
}

// Método para obtener un plato por ID
async function getById(request: Request) {
  // Ejecuta el middleware de autenticación
  const authResponse = await authMiddleware(request);
  if (authResponse) return authResponse;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const product = await sql`SELECT * FROM menu WHERE id = ${id};`;

  if (product.rows.length === 0) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product.rows[0]);
}
