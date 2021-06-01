var express = require('express'); 
var router = express.Router();

const UsersController = require('../controller/UsersController');

/* GET users listing. */
router.get('/', UsersController.index)
router.get('/login', UsersController.login)
router.post('/login', UsersController.logon)

module.exports = router;
