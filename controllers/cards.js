const Card = require ('../models/card');

const getCards = async (req, res)  =>  {
  try {
const cards = await Card.find({}).populate('owner').populate('likes');
res.status(200).json(cards);
  } catch (err) {
    res.status(500).json ({ message: 'Erro ao buscar cartões', error: err.message});
  }
};

const createCard = async (req, res) => {
  try {
    const {name, link} = req.body;
    const owner = req.user._id;
    const card = await Card.create ({ name, link, owner});
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json ({message: 'Erro ao criar cartão', error: err.message});
  }
};

const deleteCard = async (req, res) => {
  try {
    const {cardId}= req.params;
    const card = await Card.findByIdAndDelete(cardId)
      .orFail(() => {
        const error = new Error('Cartão não encontrado');
        error.statusCode = 404;
        throw error;
      });

    res.status(200).json({ message: 'Cartão deletado com sucesso', card });
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

const likeCard = async (req, res) =>  {
  try {
    const card = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id} },
      { new: true}
    );

    if (!card) {
      return res.status(404).json({ message: 'Cartão não encontrado'});
    }

    res.status(200).json(card);
    } catch (err) {
      res.status(400).json ({ message:'Erro ao curtir cartão', error: err.message});
    }
};


const dislikeCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: {likes: req.user._id} },
      { new: true}
    );
  if (!card) {
    return res.status(404).json({ message:'Cartão não encontrado'});
  }
  res.status(200).json(card);
  } catch (err) {
    res.status(400).json ({ message: 'Erro ao descurtir cartão', error: err.message});
  }
};

module.exports = {
  getCards,
createCard ,
deleteCard,
likeCard,
dislikeCard,
}