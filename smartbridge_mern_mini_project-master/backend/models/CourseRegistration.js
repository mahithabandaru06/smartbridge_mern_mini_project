const mongoose = require("mongoose");

const courseRegistrationSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  courseName: { type: String, required: true },
  courseDuration: { type: String, required: true },
  courseAmount: { type: Number, required: true },
});

module.exports = mongoose.model("CourseRegistration", courseRegistrationSchema);
