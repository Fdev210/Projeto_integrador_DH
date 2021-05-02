var express = require('express');
var router = express.Router();

const UsersController = require('../controller/UsersController');

/* GET users listing. */
router.get('/', UsersController.index)




module.exports = router;
