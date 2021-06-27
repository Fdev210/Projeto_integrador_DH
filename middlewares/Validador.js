const { check, body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')

const validador = [
    check('nome', 'insira seu nome').notEmpty(),
    check('telefone', 'insira um número de telefone válido').notEmpty().isMobilePhone('pt-BR'),
    check('email', 'insira um email válido').notEmpty().isEmail(),
    check('senha', 'insira sua senha').notEmpty(),
    check('data_nascimento', 'formato de data inválida').notEmpty().isDate(),
    // check('confirmaSenha', 'confirme sua senha').notEmpty(),
    // body('email').custom( email => {
    //     let arrayCadastro = JSON.parse(fs.readFileSync(listaDeCadastro));

    //     for (let usuario of arrayCadastro) {
    //         if(usuario.email == email) false;
    //     }

    // }).withMessage('Usuario já cadastrado'),
    (req, res, next) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(400).json(errors);
        } else {
            next();
        }
    } 
]



    


module.exports = validador;