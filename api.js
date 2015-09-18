var express = require('express');
var ctrl = require('./controller');

var router = express.Router();

// SEQUELIZE MIDDLEWARE TO CONVERT STRING REQs TO SEQUELIZE OBJECTS

// ROUTES
router.post('/dynamic', ctrl.getDynamic)

router.get('/ext/sales', ctrl.extSales)


module.exports = router