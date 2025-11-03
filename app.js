const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/aroundb')
.then(() => console.log('Conectado ao MongoDB!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));


app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6908e458c9b88c436d8d07b7'
  };

  next();
});

app.get('/', (req, res) => {
  res.send('O aplicativo esta sendo executado na porta 3000');
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
