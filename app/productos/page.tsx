"use client";

import { useEffect, useState } from "react";
import styles from "./Productos.module.css";
import { useProducts } from "@/contexts/ProductContext";
import ProductosContainer from "./ProductosContainer";
import { kodchasan } from "@/app/lib/fonts";
import { Skeleton } from "@nextui-org/skeleton";
import NavBar from "@/components/NavBar";

export default function Page() {
  const { products, isLoading, fetchProducts } = useProducts();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
    setIsLoaded(true);
  }, []);

  const masVendidos = products.slice(0, 3);
  const nuevos = products.slice(0, 3);
  const personalizacion = products.slice(0, 3);

  return (
    <>
      <NavBar />
      <div className={styles.productosPageContainer}>
        <h3 className={`${styles.productosPageTitle} ${kodchasan.className}`}>
          Nuestros Productos
        </h3>
        <ProductosContainer 
          title="Más Vendidos" 
          products={masVendidos} 
          isLoading={isLoading} 
        />
        <ProductosContainer 
          title="Nuevos Productos" 
          products={nuevos} 
          isLoading={isLoading} 
        />
        <ProductosContainer 
          title="Personalizables" 
          products={personalizacion} 
          isLoading={isLoading} 
        />
      </div>
    </>
  );
}
