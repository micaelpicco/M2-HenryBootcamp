import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <NavLink exact to="/">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <a>
              <NavLink exact to="/">
                Home
              </NavLink>
            </a>
          </li>
          <li className="list-item">
            <a>
              <NavLink exact to="/filter/posts">
                Posts
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
