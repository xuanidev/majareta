import { sql } from '@vercel/postgres';
import products from '../carta/products.json';

export async function seedPlatos() {
  const postgresUrl = process.env.POSTGRES_URL; // Accede directamente a la variable de entorno

  // Asegúrate de que postgresUrl esté definido antes de usarlo
  if (!postgresUrl) {
    throw new Error('POSTGRES_URL is not defined');
  }

  // Borrar la tabla si existe
  //await sql`DROP TABLE IF EXISTS menu;`;

  // Crear la tabla
  const createTable = await sql`
    CREATE TABLE menu (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      src VARCHAR(255),
      alt VARCHAR(255),
      price JSONB,
      description TEXT,
      allergens TEXT[],
      type VARCHAR(255), 
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  console.log(`Created "menu" table`);

 
  // Insertar nuevos platos
  const insertPlatos = await Promise.all(
    products.map(product => 
      sql`
        INSERT INTO menu (name, src, alt, price, description, allergens, type)
        VALUES (
          ${product.name},
          ${product.src},
          ${product.alt},
          ${JSON.stringify(product.price)},
          ${product.description},
          ${product.allergens},
          ${product.type}
        )
        ON CONFLICT (name) DO NOTHING;
      `
    )
  );

  console.log(`Seeded ${insertPlatos.length} menu`);

  return {
    createTable,
    insertPlatos,
  };
}
