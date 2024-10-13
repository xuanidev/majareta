import styles from './ProductCard.module.css';
import Link from 'next/link';

interface PriceProps {
    name: string;
    value: string;
}

interface ProductCardProps {
    id: number; // Cambia el nombre a id
    name: string;
    src: string;
    alt: string;
    price: PriceProps[];
}

export const ProductCard = (props: ProductCardProps) => {
    const { id, name, src, alt, price } = props;
    const slug = name.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');
    return (
        <Link href={`/carta/${slug}?id=${id}`} className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={src} className={styles.productImg} alt={alt} />
            </div>
            <div className={styles.productInfo}>
                <h2 className={styles.productName}>{name}</h2>
                <span className={styles.productPrice}>{price && price[0].value || 0} €</span>
            </div>
        </Link>
    );
};