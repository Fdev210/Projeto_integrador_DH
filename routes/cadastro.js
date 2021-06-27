const express = require('express');
const session = require('express-session');
const router = express.Router();
const validador = require('../middlewares/Validador');
const auth = require('../middlewares/auth')
const authO = require('../middlewares/authO')

const CadastroController = require('../controller/CadastroController');

/* GET home page. */
//router.post('/', validador, CadastroController.create)
router.get('/', CadastroController.index)
router.post('/', auth, authO, CadastroController.create)
//router.put('/:id', validador, CadastroController.update)
router.get('/all', auth, authO, CadastroController.indexAll)
router.get('/:id', auth, authO, CadastroController.buscaPorId) 
router.get('/:id/preferencias', auth, authO, CadastroController.buscaPreferencias)
router.get('/pagina/:pagina', auth, authO, CadastroController.buscaPagina)
router.put('/:id', auth, authO, CadastroController.update)
router.delete('/:id', auth, authO, CadastroController.delete)


//router.get('/login', CadastroController.logged)

module.exports = router;
