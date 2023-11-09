import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addScratcher">
              {" "}
              {/* Link to the AddScratcher page */}
              Add Scratcher
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/scratchers">
              {" "}
              {/* Link to the Scratchers page */}
              Scratchers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/log">
              Log
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
