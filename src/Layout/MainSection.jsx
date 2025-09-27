import React from "react";
import { Outlet } from "react-router-dom";
const MainSection = () => {
  return (
    <div style={{ backgroundColor: "rgb(227, 227, 227)", minHeight: "100vh" }}>
      <Outlet />
    </div>
  );
};

export default MainSection;
