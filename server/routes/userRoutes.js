const express = require('express');

const router = express.Router();

const requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ message: 'Unauthorized' });
};

router.get('/current-user', (req, res) => {
  res.json(req.user || null);
});

router.get('/dashboard', requireAuth, (req, res) => {
  res.json({
    user: req.user,
    message: 'Logged in with Google',
  });
});

module.exports = router;