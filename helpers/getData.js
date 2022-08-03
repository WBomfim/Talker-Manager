const fs = require('fs/promises');

const getData = async () => {
  const data = await fs.readFile('talker.json', 'utf8');
  if (!data) {
    return [];
  }
  return JSON.parse(data);
};

module.exports = {
  getData,
};
