import React from "react";
import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/GRADS/IMG1.jpg";
import IMG2 from "../Images/GRADS/IMG2.jpg";
import IMG3 from "../Images/GRADS/IMG3.jpg";
import IMG4 from "../Images/GRADS/IMG4.jpg";
import IMG5 from "../Images/GRADS/IMG5.jpg";
const Graduations = () => {
  return (
    <div className={editorialStyles.body}>
      <NavbarB />
      <Secs images={[IMG1, IMG2, IMG3, IMG4, IMG5]} />
    </div>
  );
};

export default Graduations;
