import React, { useState, useEffect } from "react";
import NavbarB from "../Components/NavBarB";
import editorialStyles from "../Styles/GallerySecs.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import FocusOverlay from "../Components/CameraFocusCursor";
import { fetchVideos } from "../api/api";

const VideosPage = () => {
  const [videos, setVideos] = useState();
  const mainVideoRef = useRef(null);
  const videoChange = (src) => {
    mainVideoRef.current.src = src;
  };

  useEffect(() => {
    fetchVideos().then((res) => setVideos(res.data));
  }, []);
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
            {videos?.length > 0 ? (
              <video
                key={videos[0]?.id}
                ref={mainVideoRef}
                controls
                class={editorialStyles.vidPlaceholder}
                src={videos[0]?.videoUrl}
              ></video>
            ) : (
              <p>No videos</p>
            )}
          </div>
        </section>
        <section className={editorialStyles.set2Vid}>
          <div className={editorialStyles.lowercolVid}>
            {videos?.length > 0 ? (
              videos?.map((video) => (
                <video
                  key={video.id}
                  className={editorialStyles.footVid}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  onClick={() => videoChange(video.videoUrl)}
                ></video>
              ))
            ) : (
              <p>No videos on this page....</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default VideosPage;
