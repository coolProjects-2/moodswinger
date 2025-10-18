
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('client'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mood-journal', { useNewUrlParser: true, useUnifiedTopology: true });

// Mood Schema
const MoodSchema = new mongoose.Schema({
  mood: String,
  notes: String,
  date: { type: Date, default: Date.now },
});

const Mood = mongoose.model('Mood', MoodSchema);

// API routes
app.post('/api/moods', async (req, res) => {
  const newMood = new Mood(req.body);
  await newMood.save();
  res.json(newMood);
});

app.get('/api/moods', async (req, res) => {
  const moods = await Mood.find().sort({ date: -1 });
  res.json(moods);
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
