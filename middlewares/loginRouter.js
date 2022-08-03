const express = require('express');
const { generateToken } = require('../helpers/generateToken');

const router = express.Router();

router.post('/', async (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
