const CadastroService = require("../services/CadastroService");
const bcryptjs = require('bcryptjs');

const CadastroController = {
    index: (req, res) => {
    //    res.render('cadastroUsuario')
        const { nome } = req.query;
        const usuario = CadastroService.listaUsuarios(nome);        
        return res.json(usuario);
    },
    create: (req,res) => {
        const {
            nome,
            email,
            telefone,
            senha,
            confirmaSenha,
            nascimento
        } = req.body

        const usuario = CadastroService.criaUsuario(
            nome,
            email,
            telefone,
            senha,
            confirmaSenha,
            nascimento
        )
        return res.json(usuario)
    },
    update: (req,res) => {

    },
    logged: (req, res) => {
        let { senha } = req.body
        let senhacript = []
    }
}

module.exports = CadastroController;
