import React from "react";
import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/EVENTS/IMG1.jpg";
import IMG2 from "../Images/EVENTS/IMG2.jpg";
import IMG3 from "../Images/EVENTS/IMG3.jpg";
import IMG4 from "../Images/EVENTS/IMG4.jpg";
import IMG5 from "../Images/EVENTS/IMG5.jpg";
import IMG6 from "../Images/EVENTS/IMG6.jpg";
import IMG7 from "../Images/EVENTS/IMG7.jpg";

const Events = () => {
  return (
    <div>
      <div className={editorialStyles.body}>
        <NavbarB />
        <Secs images={[IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8]} />
      </div>
    </div>
  );
};

export default Events;
