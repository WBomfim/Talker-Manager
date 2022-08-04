const dataServices = require('../helpers/dataServices');

const getAllTalkers = async (_req, res) => {
  const data = await dataServices.getAllTalkers();
  res.status(200).json(data);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const selectedTalker = await dataServices.getTalkerById(id);
  if (!selectedTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(selectedTalker);
};

const addTalker = async (req, res) => {
  const talker = req.body;
  const newTalker = await dataServices.addTalker(talker);
  return res.status(201).json(newTalker);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
};
