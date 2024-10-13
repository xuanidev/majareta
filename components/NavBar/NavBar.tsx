import styles from './NavBar.module.css'
import majareta from '../../public/images/majareta.png'
import Link from 'next/link';
import { Back } from '../Icons';

interface NavBarProps{
    hrefBack?: string;
}

export const NavBar = ({hrefBack}:NavBarProps) =>{

    return(
        <nav className={styles.navBar}>
            <Link href={hrefBack ?? "/"} className={styles.navBarLinkBack}>
                <Back className={styles.backIcon}/>
            </Link>
            <Link href="/" className={styles.navBarLinkMain}>
                <img className={styles.navBarImage} src={majareta.src} alt='Majareta Logo'></img>
                <span className={styles.navBarTitle}>MajareTa</span>
            </Link>
        </nav>

    )
}
export default NavBar;