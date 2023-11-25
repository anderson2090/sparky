import React from "react";
import styles from "./intro-sec.module.css";
import Image from "next/image";
import Link from "next/link";

const IntroSec = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Sparky The Fire Ice Dragon</h1>
        <p className={styles.secondaryText}>
          Sparky is a dragon of fire and ice He can be naughty or he can be nice
          He loves to fly and make art with his breath But sometimes he causes a
          lot of mess He has a heart of gold and a curious mind He’s always
          looking for new friends to find
        </p>
        <Link href="/">
          <div className={styles.signupButton}>Sign Up</div>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/sparky.jpeg" width={300} height={300} />
      </div>
    </div>
  );
};

export default IntroSec;
