const express = require("express");
const logger = require("./src/middleware/logger.middleware");
const app = express();
const userRouter = require("./src/router/user.route");
const connectDB = require("./src/config/database.config");
const dotenv = require("dotenv");

dotenv.config();

// middlewares
app.use(express.json()); // to json format
// app.use(logger); // Uncomment if logger is needed

// api-versioning
app.use("/api/v1", userRouter);

app.get("/", (req, res) => res.send("Hi this is a student platform project"));

// Start server after DB connection
(async () => {
  try {
    await connectDB(); // await the async DB connection
    const PORT = process.env.PORT || 5500;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Database connection failed: ${error.message}`);
  }
})();
