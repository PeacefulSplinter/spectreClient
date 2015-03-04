var express = require('express');
var router = express.Router();
var dashboard = require('./userController.js');
var decode = require('../auth/authService.js').decode;

// save dashboards to the database
router.get('/dashboardSave', decode(), dashboard.save);

// loading dashboards to the database
router.get('/dashboardLoad', decode(), dashboard.load);

module.exports = router;