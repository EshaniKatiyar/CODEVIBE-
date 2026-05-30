const Progress = require('../../models/progress');

exports.getProgress = async (req, res) => {
  try {
    const email = req.params.email;
    if (!email) return res.status(400).json({ message: 'Email required' });

    const progress = await Progress.findOne({ email });
    
    if (!progress) {
      return res.json({ 
        email, 
        completedLessons: [], 
        scores: {},
        xp: 0,
        level: 1
      });
    }
    
    res.json(progress);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Progress.find({}, 'username xp level badges')
      .sort({ xp: -1 })
      .limit(50)
      .lean();
    
    res.json(leaderboard);
  } catch (err) {
    console.error('Error fetching leaderboard:', err);
    res.status(500).json({ message: 'Server error' });
  }
};