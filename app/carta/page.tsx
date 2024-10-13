'use client'; 
import majareta from '../../public/images/majareta.png';
import { useState, useEffect } from 'react'; 
import styles from './Carta.module.css'; 
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { Plato } from '@/models'; 
import { fetchPlatos } from './api'; 
import { setItemWithExpiration, getItemWithExpiration } from '../lib/util'; 

const Carta = () => {
    const options = ['Menu', 'Entrantes y principales', 'Postres', 'Bebidas']; 
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
    const [platos, setPlatos] = useState<Plato[]>([]);
    const [filteredPlatos, setFilteredPlatos] = useState<Plato[]>([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option); 
        setIsDropdownOpen(false); 
    };

    useEffect(() => {
        const cachedPlatos = getItemWithExpiration('carta');
        if (cachedPlatos) {
            setPlatos(JSON.parse(cachedPlatos));
        } else {
            fetchPlatos(setPlatos).then(data => {
                setItemWithExpiration('carta', JSON.stringify(data));
                setPlatos(data ?? [] as Plato[]);
            });
        }
    }, []);

    useEffect(() => {
        if (selectedOption === options[0]) {
            setFilteredPlatos(platos); 
        } else {
            setFilteredPlatos(platos.filter(plato => plato.type === selectedOption)); 
        }
    }, [selectedOption, platos]);

    return (
        <div className={styles.carta}>
            <Link href="/" className={styles.header}>
                <img className={styles.headerLogo} src={majareta.src} alt="Logo MajareTa" />
                <h1 className={styles.headerTitle}>MajareTa</h1>
            </Link>
            <div className={styles.cartaContainer}>
                <div className={styles.customSelect}>
                    <div className={styles.selectSelected} onClick={toggleDropdown}>
                        {selectedOption}
                    </div>
                    <div className={`${styles.selectItems} ${isDropdownOpen ? '' : styles.selectHide}`}>
                        {options.map((option) => (
                            <div 
                                key={option} 
                                className={`${styles.option} ${selectedOption === option ? styles.selectedOption : ''}`} 
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className={styles.productsContainer}>
                {Array.isArray(filteredPlatos) && filteredPlatos.map((plato) => (
                    <ProductCard 
                        id={plato.id}
                        key={plato.id} 
                        name={plato.name} 
                        src={plato.src} 
                        alt={plato.alt} 
                        price={plato.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Carta;
