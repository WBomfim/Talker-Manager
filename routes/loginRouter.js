const express = require('express');
const loginController = require('../controllers/login');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/', validateEmail, validatePassword, loginController.returnToken);

module.exports = router;
