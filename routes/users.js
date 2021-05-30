var express = require('express'); 
var router = express.Router();

const UsersController = require('../controller/UsersController');

/* GET users listing. */
router.get('/', UsersController.index)
router.get('/login', UsersController.login)
router.post('/login', UsersController.logon)

router.post('/', UsersController.create)
router.put('/:id', UsersController.update)

router.get('/all', UsersController.indexAll)
router.get('/:id', UsersController.buscaPorNome)
router.get('/pagina/:pagina', UsersController.buscaPagina)


module.exports = router;
