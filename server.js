// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost/eventmanagement', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Models
const User = require('./models/User');

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/api/register', async (req, res) => {
    try {
        // Validate input
        const { name, surname, age, email, username } = req.body;
        // Implement your validation logic here

        // Create new user
        const newUser = new User({ name, surname, age, email, username });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
