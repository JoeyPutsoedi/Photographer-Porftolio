import React from "react";
import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/STUDIO/IMG1.jpg";
import IMG2 from "../Images/STUDIO/IMG2.jpg";
import IMG3 from "../Images/STUDIO/IMG3.jpg";
import IMG4 from "../Images/STUDIO/IMG4.jpg";
import IMG5 from "../Images/STUDIO/IMG5.jpg";
import IMG6 from "../Images/STUDIO/IMG6.jpg";
const Studio = () => {
  return (
    <div>
      <div>
        <div className={editorialStyles.body}>
          <NavbarB />
          <Secs images={[IMG2, IMG3, IMG1, IMG6, IMG4, IMG4, IMG5]} />
        </div>
      </div>
    </div>
  );
};

export default Studio;
