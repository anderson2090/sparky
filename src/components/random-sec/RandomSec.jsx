import React from "react";
import styles from "./random-sec.module.css";
import CardList from "../card-list/CardList";
const RandomSec = () => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        Spaky&apos;s Fun Activities: Fire and Ice Adventures
      </p>
      <CardList />
    </div>
  );
};

export default RandomSec;
