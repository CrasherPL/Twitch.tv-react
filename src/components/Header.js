import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/">Topowe Gry</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/top-streams">Topowe Transmisje</Link>
      </li>
    </nav>
  );
}


export default Header;