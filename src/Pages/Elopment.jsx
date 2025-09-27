import React from "react";
import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/ELOPMENT SHOOTS/IMG1.jpg";
import IMG2 from "../Images/ELOPMENT SHOOTS/IMG2.jpg";
import IMG3 from "../Images/ELOPMENT SHOOTS/IMG3.jpg";
import IMG4 from "../Images/ELOPMENT SHOOTS/IMG4.jpg";
import IMG5 from "../Images/ELOPMENT SHOOTS/IMG5.jpg";
import IMG6 from "../Images/ELOPMENT SHOOTS/IMG6.jpg";
import IMG7 from "../Images/ELOPMENT SHOOTS/IMG7.jpg";
import IMG8 from "../Images/ELOPMENT SHOOTS/IMG8.jpg";
const Elopment = () => {
  return (
    <div className={editorialStyles.body}>
      <NavbarB />
      <Secs images={[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8]} />
    </div>
  );
};

export default Elopment;
