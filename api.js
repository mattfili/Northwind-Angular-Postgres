var express = require('express');
var router = express.Router();

var ctrl = require(__dirname + '/controller/controller')

router.get('/dapi', ctrl.grab )

module.exports = router