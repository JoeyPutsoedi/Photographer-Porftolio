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
import Editorials from "./Pages/Editorials";
import Birthdays from "./Pages/Birthdays";
import Graduations from "./Pages/Graduations";
import Elopment from "./Pages/Elopment";
import Events from "./Pages/Events.jsx";
import Studio from "./Pages/Studio";
import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Admin from "./Admin/Admin.jsx";
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
        <Route path="/Admin" element={<Admin />} />
      </Route>

      <Route element={<DarkLayout />}>
        <Route path="/Videos" element={<VideosPage />} />
        <Route path="/Editorials" element={<Editorials />} />
        <Route path="/Birthdays" element={<Birthdays />} />
        <Route path="/Graduations" element={<Graduations />} />
        <Route path="/Elopment" element={<Elopment />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/gallery/:categoryTitle" element={<CategoryGallery />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
