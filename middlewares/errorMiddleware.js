const errorMiddleware = (_err, _req, res, _next) => res.status(500)
  .json({ message: 'Erro ao acessar o banco de dados' });

module.exports = errorMiddleware;
