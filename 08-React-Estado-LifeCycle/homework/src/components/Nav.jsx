import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    // <div>
    //   <img src={Logo}/>
    //   <span>Henry - Weather App</span>
    //   <SearchBar/>
    // </div>
    <div id="navBar">
      <div>
        <img id="logoHenry" src={Logo} />
        <span id="title">Henry - Weather App</span>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
