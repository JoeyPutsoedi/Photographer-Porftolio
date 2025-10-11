import React from "react";
import AdminNavBar from "./AdminNavBar";
import PhotoForm from "../Admin/photoForm";
import "../Styles/Admin.css";
const AdminPhotos = () => {
  return (
    <div class="Admin-wrapper">
      <AdminNavBar />
      <PhotoForm />
    </div>
  );
};

export default AdminPhotos;
