const express = require('express');
const { getData } = require('../helpers/getData');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao acessar o banco de dados' });
  }
});

module.exports = router;
