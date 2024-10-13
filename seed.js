import dotenv from 'dotenv';
import { seedPlatos } from './app/lib/seed-platos.js'; // Cambiar a seedPlatos

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export async function main() {
  try {
    await seedPlatos(); // Llamar a seedPlatos en lugar de seedProducts
    console.log('Platos seeded successfully!'); // Mensaje actualizado
  } catch (error) {
    console.error('Error seeding platos:', error); // Mensaje de error actualizado
  } finally {
    process.exit(0);
  }
}

main();