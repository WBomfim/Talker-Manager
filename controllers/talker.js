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

const searchTalkers = async (req, res) => {
  const { q } = req.query;
  const filteredTalkers = await dataServices.searchTalkers(q);
  return res.status(200).json(filteredTalkers);
};

const addTalker = async (req, res) => {
  const talker = req.body;
  const newTalker = await dataServices.addTalker(talker);
  return res.status(201).json(newTalker);
};

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const newTalker = req.body;
  const updatedTalker = await dataServices.updateTalker(id, newTalker);
  return res.status(200).json(updatedTalker);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const deleted = await dataServices.deleteTalker(id);
  if (!deleted) {
    return res.status(404).json({ message: 'Palestrante não encontrada' });
  }
  return res.status(204).send();
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  searchTalkers,
  addTalker,
  updateTalker,
  deleteTalker,
};
