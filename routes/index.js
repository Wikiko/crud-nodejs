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

module.exports = router;
