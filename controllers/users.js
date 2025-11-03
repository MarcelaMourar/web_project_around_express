const User = require ('../models/user');

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message });
    }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: 'ID inválido ou erro na busca', error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar usuário', error: err.message });
  }
};
