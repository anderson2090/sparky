import React from "react";
import styles from "./quote-sec.module.css";
const QuoteSec = () => {
  return (
    <div className={styles.main}>
      <p className={styles.quote}>
        Don&apos;t worry, be happy, unless you&apos;re on fire, then worry!
      </p>
      <p className={styles.from}>- Sparky, The Fire and Ice Dragon</p>
    </div>
  );
};

export default QuoteSec;
