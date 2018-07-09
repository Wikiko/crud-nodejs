var express = require('express');
const Customers = require('../db/customers');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Customers
    .findAll()
    .then(customers => res.render('customers/index',
      {
        title: 'Lista de Clientes',
        customers
      }));
});

router.get('/new', (req, res, next) => {
  res.render('customers/new', {
    title: 'Novo Cadastro',
    customer: {},
    action: '/new'
  });
});

router.post('/new', (req, res, next) => {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  Customers
    .insert({ nome, idade })
    .then(() => res.redirect('/'));
});

router.get('/edit/:id', (req, res, next) => {
  const id = req.params.id;
  Customers
    .findOne(id)
    .then(customer => res
      .render('customers/new', {
        title: 'Edição de Cliente',
        customer: customer,
        action: `/edit/${customer._id}`
      }));
});

router.post('/edit/:id', (req, res, next) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  Customers
    .replaceOne(id, { nome, idade })
    .then(result => res.redirect('/'));
});

router.get('/delete/:id', (req, res, next) => {
  const { id } = req.params;
  Customers
    .deleteOne(id)
    .then(() => res.redirect('/'));
});

module.exports = router;
