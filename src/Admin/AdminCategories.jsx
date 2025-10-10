import CategoryForm from "./categoryForm";
import AdminNavBar from "./AdminNavBar";

import "../Styles/Admin.css";

const AdminCategories = () => {
  return (
    <div className="Admin-wrapper">
      <AdminNavBar />
      <CategoryForm />
      {/* <PhotoForm /> */}
    </div>
  );
};

export default AdminCategories;
