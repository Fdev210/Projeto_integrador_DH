const express = require('express');
const session = require('express-session');
const router = express.Router();
const validador = require('../middlewares/Validador');

const CadastroController = require('../controller/CadastroController');

/* GET home page. */
//router.post('/', validador, CadastroController.create)
router.get('/', CadastroController.index)
router.post('/', CadastroController.create)
//router.put('/:id', validador, CadastroController.update)
router.get('/all', CadastroController.indexAll)
router.get('/:id', CadastroController.buscaPorId) 
router.get('/:id/preferencias', CadastroController.buscaPreferencias)
router.get('/pagina/:pagina', CadastroController.buscaPagina)
router.put('/:id', CadastroController.update)
router.delete('/:id',  CadastroController.delete)


//router.get('/login', CadastroController.logged)

module.exports = router;
