var express = require('express');
var ctrl = require('./controller');
var sequelizeMiddleware = require(__dirname + '/models/index')

var router = express.Router();

// SEQUELIZE MIDDLEWARE TO CONVERT STRING REQs TO SEQUELIZE OBJECTS

// ROUTES
router.post('/dynamic', ctrl.getDynamic)


module.exports = router