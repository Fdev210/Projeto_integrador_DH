const express = require('express');
const session = require('express-session');
const router = express.Router();


const CadastroController = require('../controller/CadastroController');

/* GET home page. */
router.get('/', CadastroController.index)
router.post('/', CadastroController.create)
router.put('/:id', CadastroController.update)
router.get('/login', CadastroController.logged)


module.exports = router;
