// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); // Import database connection
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
