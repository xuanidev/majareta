import Image from "next/image";
import styles from "./SmallProductCard.module.css";
import { source_sans_3 } from "@/app/lib/fonts";
import Link from "next/link";

export const SmallProductCard = ({ id, imgSrc, altImg, title, price }: {
  id: number;
  imgSrc: string;
  altImg: string;
  title: string;
  price: number;
}) => {
  const href = "/product/" + title.split(" ").join("_") + "?prod=" + id;
  console.log(imgSrc);
  return (
    <Link href={href} className={`${styles.smallProductCard} ${styles.a}`}>
      <Image
        src={imgSrc}
        className={styles.smallProductCardImg}
        alt={altImg}
        width={320}
        height={320}
      />
      <div className={styles.smallProductCardContent}>
        <h3 className={styles.smallProductCardTitle}>{title}</h3>
        <p className={`${styles.smallProductCardPrice} ${source_sans_3.className}`}>
          Desde {price}
        </p>
      </div>
    </Link>
  );
};

export default SmallProductCard;
