var express = require('express');
const Customers = require('../db/customers');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Customers
    .findAll()
    .then(customers => res.render('index',
      {
        title: 'Lista de Clientes',
        customers
      }));
});

router.get('/new', (req, res, next) => {
  res.render('new', { title: 'Novo Cadastro' });
});

router.post('/new', (req, res, next) => {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  Customers
    .insert({ nome, idade })
    .then(() => res.redirect('/'));
});

module.exports = router;
