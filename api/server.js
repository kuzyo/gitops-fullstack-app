const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js API!!!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 API server running on port ${PORT}`);
});
