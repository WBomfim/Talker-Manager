const { generateToken } = require('../helpers/generateToken');

const returnToken = async (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
};

module.exports = {
  returnToken,
};
