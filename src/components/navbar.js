import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* <div className="container-fluid"> */}
      <Link
        className="navbar-brand"
        to="/"
        style={{ dispaly: "inline-block", padding: "5px" }}
      >
        Exercise Tracker
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-Link active" aria-current="page" to="/">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/create">
              Create Exercise Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="/user">
              Create User
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default navbar;
