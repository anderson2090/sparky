import React from "react";
import styles from "./card-list.module.css";
import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={styles.list}>
      <Card
        text={
          "Spaky the fire and ice dragon ice skating on a frozen lake with his friends"
        }
        imgSrc={"/ice-skating.jpeg"}
      />
      <Card
        imgSrc={"/fireworks.jpeg"}
        text={
          "Spaky the fire and ice dragon using his fire breath to create dazzling fireworks in the sky"
        }
      />
      <Card
        imgSrc={"/cooking.jpeg"}
        text={
          "Spaky the fire and ice dragon using his fire and ice breath to cook delicious meals for his friends"
        }
      />
      <Card
        imgSrc={"/games.jpeg"}
        text={"Sparky the fire and ice dragon playing games with other dragons"}
      />
    </div>
  );
};

export default CardList;
