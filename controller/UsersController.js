const UserService = require('../services/UserService');
const bcryptjs = require('bcryptjs');

const UsersController = {
    index: (req, res) =>{ 
        res.render('usersPage', { usuario: req.usuario })
    },
    
    login: (req, res) => {
        res.render('telaLogin');
    },

    logon: async (req, res) => {
        let { email, senha } = req.body;

        const cliente = await UserService.getEmail(email);
        if(cliente === null) return res.status(400).send("Usuário não cadastrado !")

        const checkSenha = await bcryptjs.compare(senha, cliente.senha_hash)
        if(!checkSenha) return res.status(401).send('Senha inválida')

        const tokenCliente = await UserService.tokenize(cliente)
        
        req.session.usuario = tokenCliente
        return res.redirect("/users")
        }
}

module.exports = UsersController;