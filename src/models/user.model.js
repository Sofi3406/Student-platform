const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "parent", "teacher", "admin"], // allowed roles
    default: "student", // default as a string, not array
  },
});

module.exports = mongoose.model("User", userSchema);
