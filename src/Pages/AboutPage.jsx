import React from "react";
import Navbar from "../Components/Navbar.jsx";
import "../Styles/Gallery.css";
import IMG1 from "../Images/Rori/IMG1.JPEG";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="aboutCont">
        <h1>ABOUT ME</h1>
        <section className="about-me" id="about-me">
          <div className="about-field">
            <div className="gridItem grid-item1">
              <h2>Hello!</h2>
              <p>
                Creativerori is passionate photographer whose objective is to
                document Joy, Sorrow, Growth, Innovation and even Change. To
                capture the very essence of life with an eye sharp for detail
                and technique bespoke for storytelling.
                <br />
                <br />
                It is said that a single image is worth a thousand words, but
                mine are worth a million.
              </p>
            </div>
            <div className="gridItem grid-item2">
              <img src={IMG1} alt="" id="mePhoto" />
            </div>
            <div className="gridItem grid-item3">
              <h2>Skills</h2>
              <div className="skills">
                <p>Retouching</p>
                <p style={{ backgroundColor: "black", color: "white" }}>
                  Sound Design
                </p>
                <p>Color grading</p>
                <p style={{ backgroundColor: "black", color: "white" }}>
                  Adobe Premier Pro
                </p>
                <p>Adobe Photoshop</p>
                <p style={{ backgroundColor: "black", color: "white" }}>
                  Adobe Lightroom
                </p>
              </div>
            </div>
            <div className="gridItem grid-item4">
              <h2 className="">CLIENTS THAT HAVE TRUSTED ME: </h2>
              <div className="brands">
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-freebsd"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-freebsd"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-freebsd"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
