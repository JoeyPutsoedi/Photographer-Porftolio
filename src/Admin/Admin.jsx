import CategoryForm from "./categoryForm";
import PhotoForm from "./photoForm";
import Navbar from "../Components/Navbar";
import "../Styles/Admin.css";
const Admin = () => {
  return (
    <div className="Admin-wrapper">
      <Navbar />
      <CategoryForm />
      {/* <PhotoForm /> */}
    </div>
  );
};

export default Admin;
