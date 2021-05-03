const fs = require('fs');
const path = require("path");
const listaDeCadastro = path.join(__dirname,'../listaDeCadastro.json');
const bcryptjs = require('bcryptjs');

const UsersController = {
    index: (req, res) =>{
        res.render('usersPage')
    },

    login: (req, res) => {
        res.render('telaLogin');
    },

    logon: (req, res) => {
        let { email, senha } = req.body;

        fs.readFile(listaDeCadastro, 'utf-8', (err, cadastroJson) => {
            if(err) throw err;
            
            arrayCadastro = JSON.parse(cadastroJson);
            
            let indexEmail = arrayCadastro.findIndex( usuario => usuario.email == email)
            let indexSenha = arrayCadastro.findIndex(usuario => bcryptjs.compareSync(senha, usuario.senha));
               
            if(indexEmail == -1) res.send('Usuario invalido!');
            if(indexSenha == -1) res.status(401).json('não autorizado');
            
            res.send('ok')
        })


    }
}

module.exports = UsersController;