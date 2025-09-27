import React from "react";
import "../Styles/Gallery.css";
import img1 from "../Images/Creative Shoots/IMG10.jpg";
import img2 from "../Images/Creative Shoots/IMG8.jpg";
import img3 from "../Images/BIRTHDAYS/img6.jpg";
import img4 from "../Images/BIRTHDAYS/img1.jpg";
import img5 from "../Images/GRADS/IMG1.jpg";
import img6 from "../Images/GRADS/IMG4.jpg";
import img7 from "../Images/ELOPMENT SHOOTS/IMG4.jpg";
import img8 from "../Images/ELOPMENT SHOOTS/IMG8.jpg";
import img9 from "../Images/EVENTS/IMG3.jpg";
import img10 from "../Images/EVENTS/IMG7.jpg";
import img11 from "../Images/STUDIO/IMG3.jpg";
import img12 from "../Images/STUDIO/IMG5.jpg";
import GallerySec from "../Components/GallerySec";
import Navbar from "../Components/Navbar";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <GallerySec
        img1={img1}
        img2={img2}
        title={"CREATIVE EDITORIALS"}
        ref="/Editorials"
      />
      <GallerySec
        img1={img3}
        img2={img4}
        title={"BIRTHDAYS"}
        ref="/Birthdays"
      />
      <GallerySec
        img1={img5}
        img2={img6}
        title={"GRADUATIONS"}
        ref="/Graduations"
      />
      <GallerySec
        img1={img7}
        img2={img8}
        title={"ELOPMENT SHOOTS"}
        ref="/Elopment"
      />
      <GallerySec img1={img9} img2={img10} title={"EVENTS"} ref="/Events" />
      <GallerySec img1={img11} img2={img12} title={"STUDIO"} ref="/Studio" />
    </>
  );
};

export default GalleryPage;
