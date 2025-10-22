const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao ler os cards' });
    }
    const cards = JSON.parse(data);
    return res.json(cards);
  });
});

module.exports = router;
