import axios from "axios";

const api = axios.create({
  baseURL: "https://creativerori-api.onrender.com/api/",
});

//fetch categories
export const fetchCategories = () => api.get("/categories");

//create category
export const createCategory = (formData) =>
  api.post("/categories", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

//delete category
export const deleteCategory = (id) => api.delete(`/categories/${id}`);

//update category
export const updateCategory = (id, formData) =>
  api.patch(`/categories/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

//add image
export const addImage = (formData) =>
  api.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

//fetch image
export const fetchImage = (categoryTitle) =>
  api.get(`/images/${categoryTitle}`);

//delete image
export const deleteImage = (categoryTitle, id) =>
  api.delete(`/images/${categoryTitle}/${id}`);

export default api;
