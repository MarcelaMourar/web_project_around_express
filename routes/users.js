const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const usersPath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler usuarios' });
    }
    const users = JSON.parse(data);
    return res.json(users);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(usersPath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler usuarios' });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u._id === id);

    if (!user) {
      return res.status(404).json({ message: 'ID do usuario não encontrado' });
    }

    return res.json(user);
  });
});

module.exports = router;
