const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes'); // <-- Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes); // <-- Add this line

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));