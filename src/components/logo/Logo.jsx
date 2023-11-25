import React from "react";
import styles from "./logo.module.css";
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        className={styles.logoImage}
        src="/logo.png"
        width={"100"}
        height={"100"}
      />
    </Link>
  );
};

export default Logo;
