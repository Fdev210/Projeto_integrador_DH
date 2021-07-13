const express = require('express'); 
const router = express.Router();
const auth = require('../middlewares/auth');

const UsersController = require('../controller/UsersController');
const CadastroController = require('../controller/CadastroController');

/* GET users listing. */
router.get('/', auth, UsersController.index)
router.get('/login', UsersController.login)
router.post('/login', UsersController.logon)


module.exports = router;
