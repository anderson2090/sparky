import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">Gallery</Link>
      <Link href="/">Contact Sparky</Link>
      <Link href="/">About Sparky</Link>
    </div>
  );
};

export default Nav;
