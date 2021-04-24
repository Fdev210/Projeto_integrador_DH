const express = require('express');
const router = express.Router();

const CadastroController = require('../controller/CadastroController');

/* GET home page. */
router.get('/', CadastroController.index)


module.exports = router;