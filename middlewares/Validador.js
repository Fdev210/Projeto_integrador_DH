const { check, body, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')

const validador = [
    check('nome', 'Insira seu nome').notEmpty(),
    check('telefone', 'Insira um número de telefone válido').notEmpty().isMobilePhone('pt-BR'),
    check('email', 'Insira um email válido').notEmpty().isEmail(),
    check('senha', 'Insira sua senha').notEmpty(),
    check('data_nascimento', 'Formato de data inválida').notEmpty().isDate(),
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
            return res.status(400).json(errors);
        } else {
            next();
        }
    } 
]



    


module.exports = validador;