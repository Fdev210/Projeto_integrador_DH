const express = require('express');
const session = require('express-session');
const router = express.Router();
const validador = require('../middlewares/Validador');
const auth = require('../middlewares/auth')
const authO = require('../middlewares/authO')

const CadastroController = require('../controller/CadastroController');

/* register page. */
router.get('/', CadastroController.index)
router.post('/', /*auth, authO,*/ validador, CadastroController.create)
router.get('/all', auth, authO, CadastroController.indexAll)
router.get('/:id', auth, authO, CadastroController.buscaPorId) 
router.get('/pagina/:pagina', auth, authO, CadastroController.buscaPagina)
// router.get('/:id/preferencias', /*auth, authO,*/ CadastroController.buscaPreferencias)
router.put('/:id', /*auth, authO,*/ validador, CadastroController.update)
router.delete('/:id', /*auth, authO,*/ CadastroController.delete)

module.exports = router;
