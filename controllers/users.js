const User = require ('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message });
    }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
     const user = await User.findById(userId)
      .orFail(() => {
        const error = new Error('Usuário não encontrado');
        error.statusCode = 404;
        throw error;
      });

    res.status(200).json(user);
  } catch (err) {
    if (err.name === 'CastError') {
     return res.status(400).json({ message: 'ID inválido' });
    }
    if (err.statusCode === 404) {
     return res.status(404).json({ message: err.message });
    }
    res.status(500).json({ message: 'Erro no servidor', error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar usuário', error: err.message });
  }
};

module.exports = {
  getUsers,
getUserById,
createUser,
}