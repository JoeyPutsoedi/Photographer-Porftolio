import React, { useState } from "react";
import api from "../api/api";
import "../Styles/Admin.css";
const categoryForm = () => {
  const [title, setTitle] = useState("");
  const [thumbnails, setThumbnails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent form from auto submitting
    setLoading(true);

    //if new data is added to the form fields replace the old data with new data
    const formData = new FormData();
    formData.append("title", title);
    thumbnails.forEach((file) => {
      formData.append("thumbnails", file);
    });

    try {
      await api.post("/categories", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTitle("");
      setThumbnails([]);
    } catch (error) {
      console.error(error);
      alert("Failed to create category");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="categoryForm">
      <h2 className="">Add New Category</h2>
      <input
        id="title"
        type="text"
        placeholder="Category Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setThumbnails([...e.target.files])}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Create Category"}
      </button>
    </form>
  );
};

export default categoryForm;
