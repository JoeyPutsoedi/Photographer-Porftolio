import { React, useRef } from "react";
// import "../Effetcs/Effects.js";
import "../Styles/Landing.css";
import { Link } from "react-router-dom";

import { useLandingEffects } from "../Effetcs/Effects";
const placeholder = "CREATIVERORI";

const LandingPage = () => {
  const { containerRef, placeholderRef, subHeaderRef } = useLandingEffects();
  return (
    <div className="body" ref={containerRef}>
      <div className="container">
        <nav>
          <div>
            <Link to="/Gallery" id="item-1">
              Photos
            </Link>
          </div>

          <div>
            <Link to="/About" id="item-2">
              About Me
            </Link>
          </div>
        </nav>

        <footer>
          <div>
            <Link to="/Videos" id="item-3">
              Videos
            </Link>
          </div>
          <div>
            <Link to="/Contact" id="item-4">
              Contact
            </Link>
          </div>
        </footer>

        <div className="header">
          <div className="placeholder" ref={placeholderRef}>
            {placeholder}
          </div>
          <p id="subheader" ref={subHeaderRef}>
            <Link to="/Login">Art. Photo Direction. Videography</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
