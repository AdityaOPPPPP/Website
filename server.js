require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB in an async function
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.mongo, {
        });
        console.log('[MONGOOSE] = Connected to MongoDB!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

// Call the async function to connect to the database
connectToDatabase();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
});

// Create User model
const User = mongoose.model('User ', userSchema); // Removed extra space in model name

// API Endpoint to handle user login
app.post('/api/login', async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        const newUser  = new User({ username });
        await newUser .save();
        res.status(201).json({ message: `User  ${username} created and connected!` });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user', error });
    }
});

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});