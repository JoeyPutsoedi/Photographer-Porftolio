import React, { useState, useEffect } from "react";
import { addImage, fetchImage, fetchCategories, deleteImage } from "../api/api";
import "../Styles/Admin.css";
import "../Styles/Mediaqueries.css";
const photoForm = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [imagesDisplay, setImagesDisplay] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => err);
  }, []);
  //------------------------------UPLOAD IMAGE----------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId || !image) return alert("Select a category and image");

    setLoading(true);
    const formData = new FormData();
    formData.append("categoryTitle", categoryId);
    image.forEach((file) => formData.append("image", file));

    try {
      const res = await addImage(formData).catch((err) => err);
      if (res && res.data) {
        // Update UI instantly with new image
        setImagesDisplay([...imagesDisplay, ...res.data]);
        alert("Images uploaded successfully");
      }

      setImage([]);
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  //-------------------------FETCH IMAGES WHEN CATEGORY CHANGES----------------------------------------------

  useEffect(() => {
    if (!categoryId) return;

    fetchImage(categoryId)
      .then((res) => setImagesDisplay(res.data))
      .catch((err) => console.error(err));
  }, [categoryId]);
  //-----------------------------HANDLE DELETE IMAGE----------------------------------------------------------

  const handleDelete = async (id) => {
    if (!categoryId) return alert("Please select a category first");

    try {
      await deleteImage(categoryId, id);
      setImagesDisplay((prevImages) =>
        prevImages.filter((img) => img._id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete image");
    }
  };

  return (
    <div className="photos-wrapper">
      <form onSubmit={handleSubmit} className="photoForm">
        <h2 className="">Upload Photo</h2>

        <select
          id="title"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>

        <input
          className="uploadImage"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImage([...e.target.files])}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      <div className="picture-display">
        <div className="imagesDisplayed">
          {imagesDisplay.length > 0 ? (
            imagesDisplay.map((img) => (
              <div key={img._id} className="imagesActions">
                <img
                  key={img._id}
                  src={img.imageUrl}
                  alt="Uploaded"
                  className="uploaded-image"
                />
                <button onClick={() => handleDelete(img._id)}>
                  Delete Image
                </button>
              </div>
            ))
          ) : (
            <p>No images found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default photoForm;
