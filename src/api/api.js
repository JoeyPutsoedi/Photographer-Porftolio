import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api"
      : "https://backend-creativerori.fly.dev/",
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

//fetch image
export const fetchImage = (categoryTitle) =>
  api.get(`/images/${categoryTitle}`);

//add image
export const addImage = (formData) =>
  api.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

//delete image
export const deleteImage = (categoryTitle, id) =>
  api.delete(`/images/${categoryTitle}/${id}`);

//add video
export const addVideo = (formData) =>
  api.post("/videos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

//fetch videos
export const fetchVideos = () => api.get("/videos");

//delete video

export const deleteVideo = (id) => api.delete(`/videos/${id}`);

//create Admin
export const createAdmin = (formData) =>
  api.post("/createAdmin", formData, {
    headers: { "Content-Type": "application/json" },
  });

//login Admin
export const loginAdmin = (formData) =>
  api.post("/login", formData, {
    headers: { "Content-Type": "application/json" },
  });
export default api;
