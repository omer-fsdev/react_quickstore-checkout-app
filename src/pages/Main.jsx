import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="border rounded-5 pb-5  mt-5 container d-flex flex-column justify-content-center align-items-center gap-5">
      <h1 className="text-center mt-5 pt-3 home-text display-5 ">
        Welcome to Checkout Page
      </h1>
      <img src="./img/brand-logo.png" alt="quickstore" className="border-y" />
      <NavLink
        className="nav-link fw-semibold btn btn-outline-warning btn-light fs-2 py-1 mb-5 px-5"
        to="/product-list"
      >
        Go to Product List Page
      </NavLink>
    </div>
  );
};

export default Main;
