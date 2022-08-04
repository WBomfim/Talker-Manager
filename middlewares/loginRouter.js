const express = require('express');
const loginController = require('../controllers/login');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');

const router = express.Router();

router.post('/', validateEmail, validatePassword, loginController.returnToken);

module.exports = router;
