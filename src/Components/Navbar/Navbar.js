import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Asset 2.png";

const navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link to="/" className="nav-link ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link ">
            About us
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link ">
            Our Services
          </Link>
        </li>
        <li>
          <Link to="/location" className="nav-link ">
            Contact us
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="/contact" className="nav-link ">
              Connect Now
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
