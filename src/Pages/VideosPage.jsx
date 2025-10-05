import React from "react";
import NavbarB from "../Components/NavBarB";
import editorialStyles from "../Styles/GallerySecs.module.css";
import { Link } from "react-router-dom";
import abekho from "../Images/Thumbnails/abekho.png";
import birthday from "../Images/Thumbnails/birthday.png";
import tendencies from "../Images/Thumbnails/tendencies.png";
import phoenix from "../Images/Thumbnails/phoenix.png";
import studio from "../Images/Thumbnails/studio.png";
import abekhoVid from "../video/Sonwabile x Blxckie - Abekho (Official Video).mp4";
import tendenciesVid from "../video/Brad Molley - Tendencies (Official Video).mp4";
import birthdayVid from "../video/BTS Birthday Shoot.mp4";
import studioVid from "../video/BTS Studio.mp4";
import btsVid from "../video/Red Phoenix.mp4";
import { useRef } from "react";
import FocusOverlay from "../Components/CameraFocusCursor";
const VideosPage = () => {
  const mainVideoRef = useRef(null);

  const videoChange = (src) => {
    mainVideoRef.current.src = src;
  };
  return (
    <>
      <FocusOverlay />
      {/* --------------------------Navbar-------------------------- */}
      <NavbarB />
      <div className={editorialStyles.contentsVid}>
        <Link to="/Gallery">
          <div className={editorialStyles.backVid}>
            <i className="fa fa-arrow-left"></i> Back
          </div>
        </Link>
        <section className={editorialStyles.setVid}>
          <div className={editorialStyles.uppercolVid}>
            <video
              ref={mainVideoRef}
              controls
              class={editorialStyles.vidPlaceholder}
              src={abekhoVid}
            ></video>
          </div>
        </section>
        <section className={editorialStyles.set2Vid}>
          <div className={editorialStyles.lowercolVid}>
            <video
              className={editorialStyles.footVid}
              src={abekhoVid}
              poster={abekho}
              onClick={() => videoChange(abekhoVid)}
            ></video>
            <video
              className={editorialStyles.footVid}
              src={tendenciesVid}
              poster={tendencies}
              onClick={() => videoChange(tendenciesVid)}
            ></video>
            <video
              className={editorialStyles.footVid}
              src={birthdayVid}
              poster={birthday}
              onClick={() => videoChange(birthdayVid)}
            ></video>
            <video
              className={editorialStyles.footVid}
              src={studioVid}
              poster={studio}
              onClick={() => videoChange(studioVid)}
            ></video>
            <video
              className={editorialStyles.footVid}
              src={btsVid}
              poster={phoenix}
              onClick={() => videoChange(btsVid)}
            ></video>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideosPage;
