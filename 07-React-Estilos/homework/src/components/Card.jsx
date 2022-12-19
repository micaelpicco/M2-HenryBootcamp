import React from "react";
import styles from "./styles/card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.conteiner}>
      <button className={styles.button} onClick={props.onClose}>
        X
      </button>
      <h4 className={styles.cardTitle}>{props.name}</h4>
      <div className={styles.infoBoxes}>
        <div>
          <h5>Min</h5>
          <p>{props.min}</p>
        </div>
        <div>
          <h5>Max</h5>
          <p>{props.max}</p>
        </div>
        <div>
          <img
            className={styles.icon}
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          />
        </div>
      </div>
    </div>
  );
}
