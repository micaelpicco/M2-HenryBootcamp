import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            // country: recurso.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (cities.some((el) => el.id === ciudad.id))
            alert("Ya en pantalla.");
          else setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <nav>
        <Nav onSearch={onSearch} />
      </nav>
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}
