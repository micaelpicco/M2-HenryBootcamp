import React, { useState } from "react";
import { Route } from "react-router-dom";
import About from "../components/About.jsx";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import Ciudad from "../components/Ciudad.jsx";

const apiKey = "7444df6dd0c06ab7117a1bf9e65ca4cc";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
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

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/" element={<Nav onSearch={onSearch} />} /> */}
        <Route path="/" render={() => <Nav onSearch={onSearch} />} />

        <Route path="/about" component={About} />

        <Route
          exact
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        />

        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
      {/* </Routes> */}
    </div>
  );
}

export default App;
