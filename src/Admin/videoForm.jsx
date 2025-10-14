import { useState, useEffect } from "react";
import "../Styles/Admin.css";
import { addVideo, fetchVideos, deleteVideo } from "../api/api";

const videoForm = () => {
  const [videos, setVideos] = useState([]);
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  //fetch images when component renders
  useEffect(() => {
    fetchVideos()
      .then((res) => setVideos(res.data))
      .catch((err) => err);
  }, []);

  //add video
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!file || !thumbnail) return "Select a video and thumbnail";
    const formData = new FormData();
    formData.append("video", file);
    formData.append("thumbnail", thumbnail);

    try {
      const res = await addVideo(formData).catch((error) => error);
      if (res && res.data) {
        setVideos((prevImages) => [...prevImages, res.data]);
        alert("Video Uploaded Successfully");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      alert("upload failed");
    }
  };

  //handle delete
  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);
      setVideos((videos) => videos.filter((video) => video._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete");
    }
  };
  return (
    <div className="videos-wrapper">
      <form className="videoForm" onSubmit={handleSubmit}>
        <h2>Upload Video</h2>
        <label>Video:</label>
        <input
          className="uploadVideo"
          type="file"
          accept="video/*"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <br />
        <label>Thumbnail:</label>
        <input
          className="uploadVideo"
          type="file"
          accept="image/*"
          required
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
        <button type="submit">
          {loading ? "Uploading..." : "Upload video"}
        </button>
      </form>
      <div className="video-display">
        <div className="videosDisplayed">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div className="videoActions" key={video._id}>
                <video src={video.videoUrl} controls />
                <button onClick={() => handleDelete(video._id)}>
                  Delete Video
                </button>
              </div>
            ))
          ) : (
            <p>No videos found </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default videoForm;
