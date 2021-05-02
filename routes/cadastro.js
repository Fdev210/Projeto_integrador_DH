const express = require('express');
const session = require('express-session');
const router = express.Router();
const validador = require('../middlewares/Validador');


const CadastroController = require('../controller/CadastroController');

/* GET home page. */
// router.get('/', CadastroController.index)
router.post('/', validador, CadastroController.create)
router.get('/', CadastroController.read)
router.put('/:id', validador, CadastroController.update)
router.delete('/:id',  CadastroController.delete)
router.get('/login', CadastroController.logged)


module.exports = router;
