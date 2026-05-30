const express = require('express');
const router = express.Router();
const progressController = require('../../controller/progress/progresscontroller');

router.get('/leaderboard', progressController.getLeaderboard);
router.get('/:email', progressController.getProgress);

module.exports = router;
