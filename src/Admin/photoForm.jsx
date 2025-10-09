import React, { useState, useEffect } from "react";
import api from "../api/api";
import "../Styles/Admin.css";
const photoForm = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryId || !image) return alert("Select a category and image");

    setLoading(true);
    const formData = new FormData();
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    try {
      await api.post("/photos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImage(null);
      setCategoryId("");
      onUploaded?.();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <option key={cat._id} value={cat._id}>
            {cat.title}
          </option>
        ))}
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

export default photoForm;
