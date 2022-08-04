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

const addTalker = async (talker) => {
  const data = await getAllTalkers();
  const newTalker = {
    id: data.length + 1,
    ...talker,
  };
  data.push(newTalker);
  await fs.writeFile('talker.json', JSON.stringify(data, null, 2));
  return newTalker;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
};
