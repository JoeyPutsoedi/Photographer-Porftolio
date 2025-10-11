import "../Styles/Gallery.css";
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Gallery.css";
import { fetchCategories } from "../api/api";

const GalleryPage = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="gallery-container">
      <Navbar />
      <div className="gallery-wrapper">
        {categories?.map((cat) => (
          <section className="cpp">
            <div key={cat._id} className="box1">
              {cat.title}
              <Link to={`/gallery/${cat.title}`}>
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
    </div>
  );
};

export default GalleryPage;
