import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
const Card = ({ imgSrc, text }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={imgSrc}
        width={200}
        height={200}
      />

      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default Card;
