const express = require('express');
const { generateToken } = require('../helpers/generateToken');
const { validateEmail } = require('./validateEmail');

const router = express.Router();

router.post('/', validateEmail, async (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
