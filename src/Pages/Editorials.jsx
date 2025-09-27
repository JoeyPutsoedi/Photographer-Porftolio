import NavbarB from "../Components/NavBarB";
import Secs from "../Components/Secs";
import editorialStyles from "../Styles/GallerySecs.module.css";
import IMG1 from "../Images/Creative Shoots/IMG1.jpg";
import IMG2 from "../Images/Creative Shoots/IMG2.jpg";
import IMG3 from "../Images/Creative Shoots/IMG3.jpg";
import IMG4 from "../Images/Creative Shoots/IMG4.jpg";
import IMG5 from "../Images/Creative Shoots/IMG5.jpg";
import IMG6 from "../Images/Creative Shoots/IMG6.jpg";
import IMG7 from "../Images/Creative Shoots/IMG7.jpg";
import IMG8 from "../Images/Creative Shoots/IMG8.jpg";
import IMG9 from "../Images/Creative Shoots/IMG9.jpg";
import IMG10 from "../Images/Creative Shoots/IMG10.jpg";
import IMG11 from "../Images/Creative Shoots/IMG11.jpg";
import IMG13 from "../Images/Creative Shoots/IMG13.jpg";
const Editorials = () => {
  return (
    <div className={editorialStyles.body}>
      <NavbarB />
      <Secs
        images={[
          IMG1,
          IMG2,
          IMG5,
          IMG13,
          IMG3,
          IMG4,
          IMG6,
          IMG7,
          IMG8,
          IMG9,
          IMG10,
          IMG11,
        ]}
      />
    </div>
  );
};

export default Editorials;
