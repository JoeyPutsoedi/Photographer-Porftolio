import { useState, useEffect } from "react";
import "../Styles/Admin.css";
import { fetchVideos } from "../api/api";

const videoForm = () => {
  const [videos, setVideos] = useState();
  //fetch images when component renders
  useEffect(() => {
    fetchVideos()
      .then((res) => setVideos(res.data))
      .catch((err) => err);
  }, []);

  return (
    <div className="videos-wrapper">
      <form className="videoForm">
        <h2>Upload Video</h2>
        <input className="uploadVideo" type="file" accept="image/*" required />
        <button type="submit">Upload Video</button>
      </form>
      <div className="video-display">
        <div className="videosDisplayed"></div>
      </div>
    </div>
  );
};

export default videoForm;
