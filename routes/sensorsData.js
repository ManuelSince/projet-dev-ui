var express = require('express');
var router = express.Router();
const sensors = require('../models/JardiNet.js')

/* GET sensors list */
router.get('/', function(req, res, next) {
  
  res.send('respond with a resource');
});

module.exports = router;