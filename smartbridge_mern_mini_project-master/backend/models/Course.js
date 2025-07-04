// models/Course.js
import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});
export default mongoose.model("Course", courseSchema);
