var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Home', stylesheet: '/stylesheets/home.css' });
});
router.get('/product', function(req, res) {
  res.render('product', { title: 'Produit', stylesheet: '/stylesheets/product.css' });
});
router.get('/data', function(req, res) {
  const wetSensor = {
    x: [],
    y: []
  }
  const lightSensor=[]
  res.render('data', { title: 'Data dashboard', stylesheet: '/stylesheets/data.css' });
});

module.exports = router;
