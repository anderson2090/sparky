import React from "react";
import styles from "./header.module.css";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
