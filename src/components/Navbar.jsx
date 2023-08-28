import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white bg-body-tertiary">
      <div className="container-fluid gap-5">
        <NavLink className="navbar-brand col-4 my-0 py-0" to="/">
          <img src="./img/brand-logo.png" alt="quickstore" height="180px" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse bg-light text-white rounded-pill me-5 px-5"
          id="navbarNav"
        >
          <ul className="navbar-nav display-6 gap-5 mx-auto d-flex justify-content-center align-items-center">
            <li className="nav-item ">
              <NavLink
                className="nav-link active fw-semibold"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link-2 fw-semibold" to="/new-product">
                New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/product-list">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link-2 fw-semibold" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
