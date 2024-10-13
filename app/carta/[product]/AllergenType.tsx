import styles from './AllergenType.module.css'
import { Egg, Lactose, Gluten, Peanut } from "@/components/Icons";

interface AllergenTypeProps {
    type: string;
}

export const AllergenType = ({ type }: AllergenTypeProps) => {
    const renderIcon = () => {
        switch (type.toLowerCase()) {
            case "huevo":
                return <Egg className={styles.icon} />;
            case "lactosa":
                return <Lactose className={styles.icon} />;
            case "gluten":
                return <Gluten className={styles.icon} />;
            case "frutos secos":
                return <Peanut className={styles.icon} />;
            default:
                return null; 
        }
    };

    return (
        <>
            {renderIcon()}
        </>
    );
};
