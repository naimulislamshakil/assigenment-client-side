import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBar = (
    <>
      <li>
        <Link className="btn-outline font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link className="btn-outline font-bold" to="/singup">
          Sing Up
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost uppercase  text-xl">
            OMD Company
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navBar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
