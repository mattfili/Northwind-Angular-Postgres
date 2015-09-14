var express = require('express');
var ctrl = require('./controller');

var router = express.Router();



// REQUIRES
// var ctrl = require(__dirname + '/controller')


router.get('', ctrl.getStuff)

module.exports = router