import { Facebook, Instagram } from '@/components/Icons';
import styles from './page.module.css'
import majareta from '../public/images/majareta.png'
import Link from 'next/link'; 
import './globals.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img className={styles.headerLogo} src={majareta.src} alt="Logo MajareTa" />
        <h1 className={styles.headerTitle}>MajareTa</h1>
      </div>
      <div className={styles.linksContainer}>
        <nav className={styles.linksList}>
          <Link href="/carta" className={styles.linksListItem}>
            Carta
          </Link>
          <Link href="https://g.co/kgs/rPFNLdR" target="_blank" className={styles.linksListItem}>
            Reseña de Google
          </Link>
        </nav>
        <ul className={styles.linksIcons}>
          <Link href="https://www.instagram.com/majareta_restaurante/" target="_blank">
              <Instagram className={styles.linksIconItem} />
          </Link>
          <Link href="https://www.facebook.com/p/MajareTa-100028019815828/" target="_blank">
            <Facebook className={styles.linksIconItem} />
          </Link>
        </ul>
      </div>
    </div>
  );
}
