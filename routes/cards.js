const express = require('express');
const path = require('path');
const router = express.Router();
const cardsPath = path.join(__dirname, '../data/cards.json');
const { getCards, createCard, deleteCard} = require ('../controllers/cards');

router.get ('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);

module.exports = router;
