/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permitir imágenes de dominios externos si es necesario
    domains: ['http://localhost:3000/'], // Reemplaza 'example.com' con los dominios que necesites
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;