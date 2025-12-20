const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const workspaceRoutes = require("./routes/workspaceRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware - CORS with proper configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', '*'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Request logging middleware - Log ALL requests
app.use((req, res, next) => {
  console.log(`\n📍 [${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Routes
app.use(userRoutes);
app.use("/dashboard", workspaceRoutes);
app.use("/api", notificationRoutes);
app.use("/api", attendanceRoutes);

// 404 handler
app.use((req, res) => {
  console.log(`❌ 404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message);
  console.error(err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`\n✅ Server running on port ${PORT}`);
  console.log(`✅ CORS enabled for http://localhost:5173`);
  console.log(`✅ Check health: http://localhost:${PORT}/health\n`);
});