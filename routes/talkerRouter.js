const express = require('express');
const handleErrors = require('../middlewares/handleErrors');
const talkerController = require('../controllers/talkers');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.post('/', validateToken, handleErrors());

router.get('/:id', handleErrors(talkerController.getTalkerById));

module.exports = router;
