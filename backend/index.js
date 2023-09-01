const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const Database = require("./config/database");
const cors = require("cors"); // For cross origin resource sharing -- meaning sharing data to frontend

// Function for connecting to database
Database();
const PORT = process.env.PORT || 4444;

const app = express();

// CORS middleware

app.use(cors()); // with no additional configuration will allow any origin to access API , so add configuration for real build

// JSON file handling middleware
app.use(express.json());

// Routes Middleware
app.use("/api/v1", apiRoutes);

// Server Setup
app.listen(PORT, () => {
  console.log(
    "This is checking . The server should run on other port than 4444 " +
      process.env.PORT
  );
});
