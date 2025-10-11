import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import DarkLayout from "./Layout/GallerySection";
import DefaultLayout from "./Layout/MainSection";
import LandingPage from "./Pages/LandingPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import VideosPage from "./Pages/VideosPage";
import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import AdminCategories from "./Admin/AdminCategories.jsx";
import AdminPhotos from "./Admin/AdminPhotos.jsx";
import CategoryGallery from "./Components/CategoryGallery.jsx";
import "./fontawesome/css/all.min.css";
import "./boxicons/css/boxicons.css";
import "./Styles/Mediaqueries.css";
import "./Styles/CameraCursor.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedRoutes />}>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/AdminCategories" element={<AdminCategories />} />
        <Route path="/AdminPhotos" element={<AdminPhotos />} />
      </Route>

      <Route element={<DarkLayout />}>
        <Route path="/Videos" element={<VideosPage />} />

        <Route path="/gallery/:categoryTitle" element={<CategoryGallery />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
