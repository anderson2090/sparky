import React from "react";
import styles from "./signup-sec.module.css";
import Link from "next/link";


const SignUpSec = () => {
  return (
    <div className={styles.main}>
      <div className={styles.blueArea}>
        <div className={styles.textContainer}>
          <p className={styles.primaryText}>
            Embark on a fantastical journey with Sparky, the fire and ice
            dragon! 🔥❄️ Unleash the magic and join the adventure!
          </p>
          <p className={styles.secondaryText}>
            Sign up now to meet Sparky and dive into a world where flames dance
            and frost sparkles.
          </p>
        </div>
        <Link href="/" className={styles.signupButton}>
            Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignUpSec;
