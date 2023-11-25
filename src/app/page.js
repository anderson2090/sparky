import IntroSec from "@/components/intro-sec/IntroSec";
import QuoteSec from "@/components/quote-sec/QuoteSec";
import RandomSec from "@/components/random-sec/RandomSec";
import SignUpSec from "@/components/signup-sec/SignUpSec";
import React from "react";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <IntroSec />
      <RandomSec />
      <QuoteSec />
      <SignUpSec />
    </div>
  );
};

export default Home;
