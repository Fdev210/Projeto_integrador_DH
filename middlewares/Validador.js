const { check, body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')

const validador_cadastro = [
    check('nome', 'Insira seu nome').notEmpty(),
    check('telefone', 'Insira um número de telefone válido').notEmpty().isMobilePhone('pt-BR'),
    check('email', 'Insira um email válido').notEmpty().isEmail(),
    check('senha', 'Insira sua senha').notEmpty(),
    check('data_nascimento', 'Formato de data inválida').notEmpty().isDate(),
    (req, res, next) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(errors);
        } else {
            next();
        }
    } 
]

const validador_comic = [
    check('titulo', 'Insira um título válido').notEmpty(),
    check('autor', 'Insira um autor válido').notEmpty(),
    check('ano', 'Insira um ano válido').notEmpty(),
    check('sinopse', 'Insira a sinopse').notEmpty(),

    (req, res, next) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(errors);
        } else {
            next();
        }
    } 
]

module.exports = {
    "validador_cadastro" : validador_cadastro,
    "validador_comic" : validador_comic
};