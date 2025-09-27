import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Gallery.css";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="contactCont">
        <h1>CONTACT ME</h1>

        <section className="main-form">
          <div className="left-col">
            <div className="touch">
              Get in touch, Lets create something together!
            </div>
            <div className="socials">Social Media:</div>
            <div className="icons">
              <a
                href="https://www.instagram.com/creativerori?igsh=dzVicWExZnI0d2Nh&utm_source=qr"
                target="_blank"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://www.tiktok.com/@creativerori_?_t=8ner0xiS3rZ&_r=1"
                target="_blank"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
              <a
                href="https://x.com/creativerori_/status/1553856153947459590?"
                target="_blank"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
            <div className="socials">
              Business Number: <br />
              <p>061 401 4825</p>
            </div>
          </div>

          <div className="right-col">
            <form action="POST">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="contact-inputs"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="contact-inputs"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="contact-inputs"
                required
              ></textarea>
              <br />
              <button type="submit">
                {" "}
                Submit <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
