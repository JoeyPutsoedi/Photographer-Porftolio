import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import editorialStyles from "../Styles/GallerySecs.module.css";
import { Link } from "react-router-dom";
import FocusOverlay from "../Components/CameraFocusCursor";
import { fetchImage } from "../api/api";
import NavbarB from "./NavBarB";
const CategoryGallery = () => {
  const { categoryTitle } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      fetchImage(categoryTitle).then((res) => setImages(res.data));
    };
    fetchImages();
  }, [categoryTitle]);

  return (
    <>
      <NavbarB />
      <FocusOverlay />
      <div className={editorialStyles.secs}>
        <Link to="/Gallery" className={editorialStyles.back}>
          <i className="fa fa-arrow-left"></i> Back
        </Link>

        <div className={editorialStyles.set}>
          {images.map((img) => (
            <div key={img._id} className={editorialStyles.box}>
              <img src={img.imageUrl} alt={categoryTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryGallery;
