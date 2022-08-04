const { getData } = require('../helpers/getData');

const getAllTalkers = async (_req, res) => {
  try {
    const data = await getData();
    res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao acessar o banco de dados' });
  }
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getData();
    const selectedTalker = data.find((talker) => talker.id === Number(id));
    if (!selectedTalker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).json(selectedTalker);
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao acessar o banco de dados' });
  }
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};