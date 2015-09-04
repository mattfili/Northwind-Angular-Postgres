var express = require('express');
var router = express.Router();

var ctrl = require('./controller')

router.get('/products', ctrl.getProducts)

module.exports = router