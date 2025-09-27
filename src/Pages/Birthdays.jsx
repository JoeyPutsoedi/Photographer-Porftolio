import React from "react";
import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/BIRTHDAYS/img1.jpg";
import IMG2 from "../Images/BIRTHDAYS/img2.jpg";
import IMG3 from "../Images/BIRTHDAYS/img3.jpg";
import IMG4 from "../Images/BIRTHDAYS/img4.jpg";
import IMG5 from "../Images/BIRTHDAYS/img5.jpg";
import IMG6 from "../Images/BIRTHDAYS/img6.jpg";
import IMG7 from "../Images/BIRTHDAYS/img7.jpg";
const Birthdays = () => {
  return (
    <div className={editorialStyles.body}>
      <NavbarB />
      <Secs images={[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7]} />
    </div>
  );
};

export default Birthdays;
