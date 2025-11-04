import multer from "multer";

// store files in memory, then send buffer to Cloudinary
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
    files: 10, // maximum 10 files
  },
});

export default upload;
