const UserService = require('../services/UserService');
const bcryptjs = require('bcryptjs');

const UsersController = {
    index: async (req, res) =>{ 
        const { id } = req.usuario
        const clientePreferencias = await UserService.clientePreferencia(id)
        const clienteComics = clientePreferencias.map(elem => elem.Comics[0])

        return res.render('usersPage', { 
            usuario: req.usuario,
            comics: clienteComics
        })
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

        if (cliente.tipo_usuario == "admin") return res.redirect("/comicpage")

        return res.redirect('/users')

        }
}

module.exports = UsersController;