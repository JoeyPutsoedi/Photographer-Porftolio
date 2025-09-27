import React, { Component } from "react";
import editorialStyles from "../Styles/GallerySecs.module.css";
import { Link } from "react-router-dom";
const Secs = ({ images = [] }) => {
  return (
    <>
      <div className={editorialStyles.secs}>
        <Link to="/Gallery" className={editorialStyles.back}>
          <i className="fa fa-arrow-left"></i> Back
        </Link>

        <div className={editorialStyles.set}>
          {images.map((img, index) => (
            <div key={index} className={editorialStyles.box}>
              <img src={img} alt={`image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Secs;
