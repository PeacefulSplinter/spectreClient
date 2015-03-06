var express = require('express');
var router = express.Router();
var dashboard = require('./userController.js');
var decode = require('../auth/authService.js').decode;

// save dashboards to the database
router.post('/dashboardSave', dashboard.save);

// loading dashboards to the database
router.get('/dashboardLoad', dashboard.load);

module.exports = router;
