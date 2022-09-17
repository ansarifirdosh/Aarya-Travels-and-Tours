import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from 'react-icons/fa';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md mt-1">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
        <FaTelegramPlane/> Aarya Travels and Tours
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-lg-5" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/About" className="nav-link active">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/TourPackages" class="nav-link active">
                Tour Packages
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ExtraActivities" className="nav-link active">
                Extra Activities
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Contact" className="nav-link active">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
