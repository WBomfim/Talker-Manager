const fs = require('fs/promises');

const getAllTalkers = async () => {
  const data = await fs.readFile('talker.json', 'utf8');
  if (!data) {
    return [];
  }
  return JSON.parse(data);
};

const getTalkerById = async (id) => {
  const data = await getAllTalkers();
  const selectedTalker = data.find((talker) => talker.id === Number(id));
  return selectedTalker;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};
