import React, { useState } from "react";
import { Link } from "react-router-dom";
const AdminNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="navigation">
      <nav>
        <section>
          <Link to="/" id="logo">
            CREATIVE RORI
          </Link>
        </section>
        <section className={`nav-items ${isOpen ? "open" : " "}`}>
          <Link to="/" id="Contact">
            Categories
          </Link>
          <Link to="/Gallery" id="Contact">
            Photos
          </Link>
          <Link to="/Gallery" id="Contact">
            Videos
          </Link>
        </section>

        <div className="menu-icon">
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </div>
      </nav>
    </section>
  );
};

export default AdminNavBar;
