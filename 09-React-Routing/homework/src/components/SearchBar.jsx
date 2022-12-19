import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [state, setState] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(state);
    setState("");
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
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
