const fs = require('fs');
const path = require("path");
const listaDeCadastro = path.join(__dirname,'../listaDeCadastro.json');
const bcryptjs = require('bcryptjs');
const CadastroService = require('../services/CadastroService');

const UsersController = {
    index: (req, res) =>{ 
        res.render('usersPage')
    },
    
    indexAll: async (req, res) => {
        const lista = await CadastroService.buscaClientesLista()
        return res.json(lista)
    },
    buscaPorNome: async (req, res) => {
        const {id} = req.params
        const cliente = await CadastroService.buscaClienteNome(id)
        return res.json(cliente)
    },
    buscaPagina: async (req, res) => {
        const {pagina} = req.params
        const resultadoPagina = await CadastroService.buscaPagina(pagina)
        return res.json(resultadoPagina)
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
               
            if(indexEmail == -1) return res.send('Usuario invalido!');
            if(indexSenha == -1) return res.status(401).send('não autorizado');
            
            return res.send('ok')
        })


    },
    create: async (req, res) => {
        const {
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        } = req.body
        const cliente = await CadastroService.criaUsuario(
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        )
        return res.json(cliente)
    },
    update: async (req, res) => {
        const { id } = req.params
        const {
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        } = req.body

        const clienteAlterado = await CadastroService.alteraCliente(
            id,
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        ) 
        
        res.json(clienteAlterado)

    }
}

module.exports = UsersController;