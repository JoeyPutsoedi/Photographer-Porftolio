import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryGallery = () => {
  const { categoryTitle } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`/api/images/${categoryTitle}`);
      const data = await res.json();
      setImages(data);
    };
    fetchImages();
  }, [categoryTitle]);

  return (
    <div className="gallery-container">
      <h1>{categoryTitle}</h1>
      <div className="gallery-grid">
        {images.map((img) => (
          <img key={img._id} src={img.imageUrl} alt={categoryTitle} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGallery;
