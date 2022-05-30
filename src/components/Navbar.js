import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState();

  const [button, setButton] = useState(true);

  const handclickMenu = () => {
    setClick(!click);
  };

  const handleMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <FontAwesomeIcon icon={faSeedling} />
          </Link>
          <div className="menu-icon" onClick={handclickMenu}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className="nav-links"
                onClick={handleMobileMenu}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={handleMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={handleMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle={"btn--outline"}>SIGN UP</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
