const express = require('express');
const session = require('express-session');
const router = express.Router();
const validador = require('../middlewares/Validador');

const CadastroController = require('../controller/CadastroController');

/* GET home page. */
// router.get('/', CadastroController.index)
//router.post('/', validador, CadastroController.create)
router.post('/', CadastroController.create)
router.get('/', CadastroController.index)
//router.put('/:id', validador, CadastroController.update)
router.put('/:id', CadastroController.update)
router.delete('/:id',  CadastroController.delete)
router.get('/login', CadastroController.logged)
router.get('/all', CadastroController.indexAll)
router.get('/:id', CadastroController.buscaPorNome)
router.get('/pagina/:pagina', CadastroController.buscaPagina)


//router.post('/', UsersController.create)
//router.put('/:id', UsersController.update)

module.exports = router;
