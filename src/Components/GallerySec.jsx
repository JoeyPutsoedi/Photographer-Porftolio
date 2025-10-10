import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Gallery.css";
import { fetchCategories } from "../api/api";

const GallerySec = ({ img1, img2, title, ref }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="gallery-wrapper">
      {categories?.map((cat) => (
        <section className="cpp">
          <div key={cat._id} className="box1">
            {cat.title}
            <Link to={ref}>
              <p>
                Open Gallery<i className="fa-solid fa-arrow-right"></i>
              </p>
            </Link>
          </div>
          <div className="box">
            <img src={cat.thumbnail?.[0]} alt="" />
          </div>
          <div className="box">
            <img src={cat.thumbnail?.[1]} alt="" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default GallerySec;

{
  /* <section className="cpp">
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
  </section> */
}
