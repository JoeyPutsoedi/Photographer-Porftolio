import React, { useState, useEffect } from "react";
import "../Styles/Admin.css";
import "../Styles/Mediaqueries.css";
import {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../api/api";

const categoryForm = () => {
  const [categories, setCategories] = useState([]); //store all the catergories in the backend
  const [newTitle, setNewTitle] = useState(""); //store the title state when we create a new category
  const [newFiles, setNewFiles] = useState([]); //store the thumbnails state when we create a new category
  const [loading, setLoading] = useState(false); // boolean for showing "Uploading..." while sending data.
  const [updateData, setUpdateData] = useState({}); //syate to store data when we update

  //fetch categories when the component loads initially
  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.data));
    //fetch categories then set the res.data to setCategories
  }, []);

  //Handle submit function-------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent auto submit
    setLoading(true);

    //when no title or insufficient thummbnails are selected fire an alert
    if (!newTitle || newFiles.length < 2)
      return alert("Need title and 2 thumbnails");

    //append the data we input to the respective states
    const formData = new FormData();
    formData.append("title", newTitle);
    newFiles.forEach((file) => formData.append("thumbnails", file));

    //create a categoryon the api using the formData we just appended
    const res = await createCategory(formData);
    if (res) {
      alert("Category Added Successfully");
      setLoading(false);
    }

    setCategories([...categories, res.data]); //update local state with database content

    setNewTitle("");
    setNewFiles([]);
  };

  //handle update function--------------------------------------------------------------------
  const handleUpdate = async (id) => {
    const data = updateData[id]; //get the id of the particular object/category we're updating

    if (!data) return alert("No update data for this category");

    const formData = new FormData();
    if (data.title) formData.append("title", data.title); //if there's a new input append it
    if (data.files && data.files.length > 0) {
      data.files.forEach((file) => formData.append("thumbnails", file));
    }
    try {
      const res = await updateCategory(id, formData);
      categories.map((c) => (c._id === id ? res.data : c));
      alert("Category updated successfully!");
    } catch (err) {
      alert("Failed to update category");
      console.error(err);
    }
  };

  //handle Delete function-------------------------------------------------------------------
  const handleDelete = async (id) => {
    await deleteCategory(id);
    setCategories(categories.filter((c) => c._id !== id));
  };

  return (
    <div className="categories-wrapper">
      <h1>Categories</h1>
      <div className="categories-cont">
        <form onSubmit={handleSubmit} className="categoryForm">
          <input
            id="title"
            type="text"
            placeholder="Category Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <input
            className="selectThumbs"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setNewFiles([...e.target.files])}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Add Category"}
          </button>
        </form>
        {/*TABLE--------------------------------------------------------------*/}
        <div className="categories-table">
          <table className="Table">
            <thead>
              <tr>
                <th colSpan="5">Categories</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat._id}>
                  <td>{cat.title}</td>
                  <td>
                    <input
                      id="title"
                      type="text"
                      placeholder="Update Title"
                      value={updateData[cat._id]?.title || ""}
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          [cat._id]: {
                            ...updateData[cat._id],
                            title: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) =>
                        setUpdateData({
                          ...updateData,
                          [cat._id]: {
                            ...updateData[cat._id],
                            files: [...e.target.files],
                          },
                        })
                      }
                      className="updateThumbs"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdate(cat._id)}
                      className="update"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default categoryForm;
