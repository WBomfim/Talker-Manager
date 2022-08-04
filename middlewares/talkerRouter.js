const express = require('express');
const talkerController = require('../controllers/talkers');

const router = express.Router();

router.get('/', talkerController.getAllTalkers);

router.get('/:id', talkerController.getTalkerById);

module.exports = router;
