import React from "react";
import styles from "./styles/searchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.global}>
      <input
        className={styles.input}
        type={"text"}
        placeholder={"Ciudad..."}
      ></input>
      <button className={styles.button} type="submit" onClick={() => props.onSearch("Buscando")}>
        Agregar
      </button>
    </div>
  );
}
