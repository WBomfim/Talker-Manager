const express = require('express');
const handleErrors = require('../middlewares/handleErrors');
const talkerController = require('../controllers/talkers');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  handleErrors());

router.get('/:id', handleErrors(talkerController.getTalkerById));

module.exports = router;
