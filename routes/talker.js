const express = require('express');
const handleErrors = require('../middlewares/handleErrors');
const talkerController = require('../controllers/talker');
const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateDate = require('../middlewares/validateDate');
const validateRate = require('../middlewares/validateRate');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
  handleErrors(talkerController.addTalker));

router.get('/:id', handleErrors(talkerController.getTalkerById));

router.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate,
handleErrors(talkerController.updateTalker));

router.delete('/:id', validateToken, handleErrors(talkerController.deleteTalker));

module.exports = router;
