import React from "react";
import "../Styles/Gallery.css";
import { Link } from "react-router-dom";
const GallerySec = ({ img1, img2, title, ref }) => {
  return (
    <section className="cpp">
      <div className="box1">
        {title}
        <Link to={ref}>
          <p>
            Open Gallery<i className="fa-solid fa-arrow-right"></i>
          </p>
        </Link>
      </div>
      <div className="box">
        <img src={img1} alt="image 1" />
      </div>
      <div className="box">
        <img src={img2} alt="" />
      </div>
    </section>
  );
};

export default GallerySec;
