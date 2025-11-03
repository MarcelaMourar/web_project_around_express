const Card = require ('../models/card');

export const getCards = async (req, res)  =>  {
  try {
const cards = await Card.find({}).populate('owner').populate('likes');
res.status(200).json(cards);
  } catch (err) {
    res.status(500).json ({ message: 'Erro ao buscar cartões', error: err.message});
  }
};

export const creatCard = async (req, res) => {
  try {
    const {name, link} = req.body;
    const owner = req.user._id;
    const card = await Card.create ({ name, link, owner});
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json ({message: 'Erro ao criar cartão', error: err.message});
  }
};

export const deleteCard = async (req, res) => {
  try {
    const {cardId}= req.params;
    const card = await Card.findByIdAndDelete (cardId);

    if (!card) {
      return res.status (404).json({ message: ' Cartão não encontrado'});
    }
    res.status(200).json ({ message: 'Cartão deletado com sucesso',card});
  } catch (err) {
    res.status (400).json ({ message: 'ID inválido ou erro ao deleter', err: err.message});
  }
};