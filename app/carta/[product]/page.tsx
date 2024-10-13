"use client"
import { useEffect, useState } from 'react';
import styles from './ProductName.module.css';
import { Plato } from '@/models';
import { useSearchParams } from 'next/navigation';
import { Warning } from '@/components/Icons';
import NavBar from '@/components/NavBar/NavBar';
import { Skeleton } from '@nextui-org/react';
import { AllergenType } from './AllergenType';
import { getItemWithExpiration } from '../../lib/util'

const ProductPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [productData, setProductData] = useState<Plato | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProduct = async () => {
        if (id) {
            // Verificar si el producto está en el almacenamiento local
            const cachedPlatosStr = getItemWithExpiration('carta');
            if (cachedPlatosStr) {
                const cachedPlatos: Plato[] = JSON.parse(cachedPlatosStr);
                const cachedProduct = cachedPlatos.find(plato => plato.id === parseInt(id));
                if (cachedProduct) {
                    setProductData(cachedProduct);
                    setLoading(false);
                    return;
                }
            }
            try {
                const response = await fetch(`/api/platos?id=${id}`);
                if (!response.ok) throw new Error('Error al recuperar el producto');
                const data: Plato = await response.json();
                setProductData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className={styles.productPage}>
                <NavBar hrefBack='/carta'/>
                <div className={styles.productInfo}>
                    <Skeleton style={{ width: '100%', marginBottom: '1rem', height: '200px' }} />
                    <h1 className={styles.productTitle}>
                        <Skeleton style={{ width: '80%', marginBottom: '0.5rem', height: '30px' }} />
                        <span className={styles.loadingDots}>
                            <span className={styles.dot}>.</span>
                            <span className={styles.dot}>.</span>
                            <span className={styles.dot}>.</span>
                        </span>
                    </h1>
                </div>
            </div>
        );
    }

    if (error) {
        return <div role="alert" style={{color: "white", width: "100%", textAlign: "center"}}>Se ha producido un error. Lo sentimos, pruebe a recargar la página.</div>;
    }

    if (!productData) {
        return <div role="alert" style={{color: "white", width: "100%", textAlign: "center"}}>Producto no encontrado.</div>;
    }

    const { name, src, price, description, allergens } = productData;

    return (
        <div className={styles.productPage}>
            <NavBar hrefBack='/carta'/>
            <div className={styles.productInfo}>
                <h1 className={styles.productTitle}>{name}</h1>
                <img 
                    src={src} 
                    alt={`Imagen de ${name}`} 
                    className={styles.productImage} 
                    aria-labelledby="product-title"
                />
                <ul className={styles.productPrice}>
                    {price && price.length > 0 ? (
                        price.map((priceOption) => (
                            <li 
                                className={`${styles.productPriceItem} ${price.length === 1 ? styles.single : ''}`} 
                                key={priceOption.name}
                            >
                                <span>{priceOption.name}</span>
                                <span>{priceOption.value} €</span>
                            </li>
                        ))
                    ) : (
                        <li className={styles.productPriceItem}>No hay precios disponibles</li>
                    )}
                </ul>
                {description && (
                    <div aria-live="polite" className={styles.productDescription}>
                        {description}
                    </div>
                )}
                {allergens && allergens.length > 0 && !(allergens.length === 1 && allergens[0] === "") && (
                    <div className={styles.productAllergens}>
                        <div className={styles.productAllergensTitle}>
                            <Warning className={styles.productAllergensTitleIcon}/>
                            <h2 className={styles.productAllergensTitleText}>Alergenos</h2>
                        </div>
                        <ul className={styles.productAllergensList}>
                            {allergens.map((allergen) => (
                                <li className={styles.productAllergensListItem} key={allergen}>
                                    <AllergenType type={allergen} key={allergen} />{allergen}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
