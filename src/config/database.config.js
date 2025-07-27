const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected");
  } catch (error) {
    console.log(`Couldn't connect to MongoDB: ${error.message}`);
    throw error; // rethrow to be caught in index.js
  }
};

module.exports = connectDB;
