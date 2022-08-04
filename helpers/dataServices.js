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

const updateTalker = async (id, newTalker) => {
  const data = await getAllTalkers();
  let updatedTalker;
  const newData = data.map((talker) => {
    if (talker.id === Number(id)) {
      updatedTalker = {
        id: talker.id,
        ...newTalker,
      };
      return updatedTalker;
    }
    return talker;
  });
  await fs.writeFile('talker.json', JSON.stringify(newData, null, 2));
  return updatedTalker;
};

const deleteTalker = async (id) => {
  const data = await getAllTalkers();
  const idFound = data.some((talker) => talker.id === Number(id));
  if (!idFound) return false;
  const newData = data.filter((talker) => talker.id !== Number(id));
  await fs.writeFile('talker.json', JSON.stringify(newData, null, 2));
  return true;
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
  updateTalker,
  deleteTalker,
};
