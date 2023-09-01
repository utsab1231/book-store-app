import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          BookStore
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-item nav-link active text-white">
              HOME
            </Link>
            <Link to="/books" className="nav-item nav-link active text-white">
              BOOKS
            </Link>
            <Link
              to="/addbooks"
              className="nav-item nav-link active text-white"
            >
              ADD BOOKS
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
