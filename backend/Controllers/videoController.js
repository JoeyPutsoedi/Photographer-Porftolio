import Video from "../Models/videoModel.js";
import { uploadToCloudinary } from "../Config/Cloudinary.js";

//add video
export const addVideo = async (req, res) => {
  try {
    const videoUrl = await uploadToCloudinary(req.file.buffer);

    const video = new Video({
      videoUrl,
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

//fetch videos
export const fetchVideo = async (req, res) => {
  try {
    const videos = await Video.find().sort(createdAt - 1);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

//delete video

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    res.json({ message: "Video Deleted" });
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
};
