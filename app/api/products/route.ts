import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Método para obtener un producto por ID o un producto aleatorio si no se proporciona ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const firstNine = searchParams.get('firstNine');

  if (firstNine) {
    // Obtener los primeros 9 productos
    const products = await sql`SELECT * FROM productos LIMIT 9;`;

    if (products.rows.length === 0) {
      return NextResponse.json({ error: 'No products available' }, { status: 404 });
    }

    return NextResponse.json(products.rows);
  }

  if (id) {
    // Obtener un producto por ID
    const product = await sql`SELECT * FROM productos WHERE id = ${id};`;

    if (product.rows.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product.rows[0]);
  } else {
    // Obtener un producto aleatorio
    const product = await sql`SELECT * FROM productos ORDER BY RANDOM() LIMIT 1;`;

    if (product.rows.length === 0) {
      return NextResponse.json({ error: 'No products available' }, { status: 404 });
    }

    return NextResponse.json(product.rows[0]);
  }
}

// Método para crear un nuevo producto
export async function POST(request: Request) {
  const { title, description, price, imgSrc, altImg, dimensions, categories, images, materials } = await request.json();

  const newProduct = await sql`
    INSERT INTO productos (title, description, price, imgSrc, altImg, dimensions, categories, images, materials)
    VALUES (${title}, ${description}, ${price}, ${imgSrc}, ${altImg}, ${dimensions}, ${categories}, ${images}, ${materials})
    RETURNING *;
  `;

  return NextResponse.json(newProduct.rows[0], { status: 201 });
}

// Método para actualizar un producto
export async function PUT(request: Request) {
  const { id, title, description, price, imgSrc, altImg, dimensions, categories, images, materials } = await request.json();

  const updatedProduct = await sql`
    UPDATE productos
    SET title = ${title}, description = ${description}, price = ${price}, imgSrc = ${imgSrc}, altImg = ${altImg}, dimensions = ${dimensions}, categories = ${categories}, images = ${images}, materials = ${materials}
    WHERE id = ${id}
    RETURNING *;
  `;

  if (updatedProduct.rowCount === 0) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(updatedProduct.rows[0]);
}

// Método para eliminar un producto
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  const deletedProduct = await sql`DELETE FROM productos WHERE id = ${id} RETURNING *;`;

  if (deletedProduct.rows.length === 0) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(deletedProduct.rows[0]);
}
