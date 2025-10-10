import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
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
export const fetchImage = (categoryTitle) => api.get(`/image/${categoryTitle}`);
export default api;
