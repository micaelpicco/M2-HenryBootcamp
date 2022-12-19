import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <div>
          <span>Min</span>
          <span>{props.min}</span>
        </div>
        <div>
          <span>Max</span>
          <span>{props.max}</span>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} />
        </div>
      </div>

      {/* <h4>{props.name}</h4>
      <p>Min</p>
      <p>{props.min}</p>
      <p>Max</p>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img> */}
    </div>
  );
}
