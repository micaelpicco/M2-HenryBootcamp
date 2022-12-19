import React, { useState } from "react";
import "./Nav.css";

export default function SearchBar({ onSearch }) {
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(state);
        setState("");
      }}
    >
      <input
        id="buscador"
        type="text"
        placeholder="Ciudad..."
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input id="boton" type="submit" value="Agregar" />
    </form>
  );
}
