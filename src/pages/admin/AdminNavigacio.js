import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../contexts/AuthContext";

export default function AdminNavigacio() {
  const { logout } = useAuthContext();

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/cikkoldal">
              Cikkek
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/esemenyekoldal">
              Események
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/besorolasoldal">
              Besorolások
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/menuoldal">
              Menük
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/partneroldal">
              Partnerek
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/ceginfooldal">
              Cég infok
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/useroldal">
              Felhasználok
            </Link>
          </li>
          <li className="navbar-item">
            <button className="nav-link" onClick={() => { logout() }}>
                Kijelentkezés
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
