import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type={"text"} placeholder={"Ciudad..."}></input>
      <button type="submit" onClick={()=>props.onSearch("Buscando")}>
        Agregar
      </button>
    </div>
  );
}
