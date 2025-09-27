import React from "react";
import { Outlet } from "react-router-dom";
const GallerySection = () => {
  return (
    <div
      className="dark"
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <Outlet />
    </div>
  );
};

export default GallerySection;
