import { NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigacio() {
  return (
    <nav className="navbar navbar-expand-sm bg-light sticky-top">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Kezdőlap
              {/* <img src="" alt="" /> */}
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Virtualizáció
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Szerverkonszolidáció
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Tároló Konszolidáció
            </Link>
          </li>
          <NavDropdown id="dropdown-item-button" title="Megoldások">
            <NavDropdown.Item as="button">Szerver virtualizáció</NavDropdown.Item>
            <NavDropdown.Item as="button">Alkalmazás virtualizáció</NavDropdown.Item>
          </NavDropdown>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Letöltések
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Kapcsolat
            </Link>
          </li>

          {/* Ide kerül a magyar és az angol ikon, a nyelvváltáshoz! */}
        </ul>
      </div>
    </nav>
  );
}
