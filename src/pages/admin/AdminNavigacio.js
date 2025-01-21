import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavigacio() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/admin">
              Kezdőlap
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
