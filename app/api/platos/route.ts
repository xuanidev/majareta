import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Método para obtener todos los platos
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    return await GET_BY_ID(request); 
  }

  const products = await sql`SELECT *, type FROM menu;`;

  if (products.rows.length === 0) {
    return NextResponse.json({ error: 'No products available' }, { status: 404 });
  }

  return NextResponse.json(products.rows);
}

// Método para obtener un plato por ID
export async function GET_BY_ID(request: Request) {
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
