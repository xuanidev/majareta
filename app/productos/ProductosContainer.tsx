import styles from "./ProductosContainer.module.css";
import { ProductCardProps } from "@/models";
import { Skeleton } from "@nextui-org/skeleton";
import { Raleway } from "@next/font/google";
import SmallProductCard from "./SmallProductCard";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300"],
});

interface ProductosContainerProps {
  title: string;
  products: ProductCardProps[];
  isLoading: boolean;
}

const ProductosContainer = ({ title, products, isLoading }: ProductosContainerProps) => {
  return (
    <section className={styles.productosSection}>
      <h4 className={`${styles.productosSectionTitle} ${raleway.className}`}>{title}</h4>
      <div className={styles.productosCards}>
        {isLoading
          ? Array(3).fill(0).map((_, index) => (
              <div key={index} className={styles.productCardSkeleton}>
                <Skeleton className={styles.productImageSkeleton} />
                <div className={styles.productCardContent}>
                  <Skeleton className={styles.productTitleSkeleton} />
                  <Skeleton className={styles.productPriceSkeleton} />
                </div>
              </div>
            ))
          : products.map((product, index) => (
              <SmallProductCard
                key={product.title.concat(index.toString())}
                id={product.id}
                imgSrc={product.imgsrc}
                altImg={product.altimg}
                title={product.title}
                price={product.price}
              />
            ))}
      </div>
    </section>
  );
};

export default ProductosContainer;
