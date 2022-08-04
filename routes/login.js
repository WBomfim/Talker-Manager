const express = require('express');
const handleErrors = require('../middlewares/handleErrors');
const loginController = require('../controllers/login');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const router = express.Router();

router.post('/',
  validateEmail,
  validatePassword,
  handleErrors(loginController.returnToken));

module.exports = router;
