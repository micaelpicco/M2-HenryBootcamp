import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map((elemento) => (
        <Card
          max={elemento.main.temp_max}
          min={elemento.main.temp_min}
          name={elemento.name}
          img={elemento.weather[0].icon}
          onClose={() => alert(elemento.name)}
        />
      ))}
      {/* <Card
        max={Cairns.main.temp_max}
        min={Cairns.main.temp_min}
        name={Cairns.name}
        img={Cairns.weather[0].icon}
        onClose={() => alert(Cairns.name)}
      /> */}
    </div>
  );
}
