const express = require('express');
const handleErrors = require('./handleErrors');
const talkerController = require('../controllers/talkers');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.get('/:id', handleErrors(talkerController.getTalkerById));

module.exports = router;
