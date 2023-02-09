var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Produit' });
});
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Data dashboard' });
});

module.exports = router;
