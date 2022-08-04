const generateToken = require('../helpers/generateToken');

const returnToken = async (_req, res) => {
  const token = generateToken();
  if (!token) {
    return res.status(500).json({ message: 'Erro ao gerar o token' });
  }
  return res.status(200).json({ token });
};

module.exports = {
  returnToken,
};
