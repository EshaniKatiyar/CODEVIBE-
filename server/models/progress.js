// models/Progress.js
const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  
  completedLessons: { type: [String], default: [] },
  scores: { type: Map, of: Number, default: {} },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  badges: { type: [String], default: [] },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: { type: String, required: true },
  year: { type: String, required: true },

  
});

module.exports = mongoose.models.Progress || mongoose.model('Progress', progressSchema);
