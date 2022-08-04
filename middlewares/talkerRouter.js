const express = require('express');
const handleErrors = require('./handleErrors');
const talkerController = require('../controllers/talkers');
const validateToken = require('./validateToken');

const router = express.Router();

router.get('/', handleErrors(talkerController.getAllTalkers));

router.post('/', validateToken, handleErrors());

router.get('/:id', handleErrors(talkerController.getTalkerById));

module.exports = router;
