import React from "react";
import { Link } from "react-router-dom";
import editorialStyles from "../Styles/GallerySecs.module.css";
const NavbarB = () => {
  return (
    <nav className={editorialStyles.nav}>
      <section>
        <Link to="/" id="logo">
          CREATIVE RORI
        </Link>
      </section>
      <section className={editorialStyles.navItems}>
        <Link to="/" id="Contact">
          Home
        </Link>
        <Link to="/Gallery" id="Contact">
          Photos
        </Link>
        <Link to="/Videos" id="Contact">
          Video
        </Link>
        <Link to="/About" id="Contact">
          About Me
        </Link>
        <Link to="/Contact" id="Contact">
          Contact
        </Link>
      </section>

      <div className="menu-icon">
        {/* <i className="fa-solid fa-bars" onClick="toggleMenu()"></i> */}
      </div>
    </nav>
  );
};

export default NavbarB;
