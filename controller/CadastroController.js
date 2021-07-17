const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')
const CadastroService = require("../services/CadastroService");
const bcryptjs = require('bcryptjs');
const database = require('../database/models/index');

const CadastroController = {

    index: async (req, res) => {
        const preferencias = await database.Preferencia.findAll({attributes: ['id','preferencias']})
     //   res.render('cadastroUsuario', {preferencias: JSON.stringify(preferencias)});
        res.render('cadastroUsuario', {preferencias: preferencias});
},
  
    indexAll: async (req, res) => {
        const lista = await CadastroService.buscaClientesLista()
        return res.json(lista)
    },

    buscaPorId: async (req, res) => { 
        const {id} = req.params
        const cliente = await CadastroService.buscaClienteId(id)
        return res.json(cliente)
    },

    buscaPreferencias: async (req, res) => {
        const {id} = req.params
        const cliente = await CadastroService.buscaPreferencia(id)
        return res.json(cliente)
    },

    buscaPagina: async (req, res) => {
        const {pagina} = req.params
        const resultadoPagina = await CadastroService.buscaPagina(pagina)
        return res.json(resultadoPagina)
    },

    create: async (req, res) => {
        const {
            nome,
            email,  
            telefone,
            senha,
            data_nascimento,
            preferenciasCliente
        } = req.body

        const cliente = await CadastroService.criaUsuario(
            nome,
            email,  
            telefone,
            senha,
            data_nascimento,
            preferenciasCliente
        )
        return res.json(cliente)
    },
     
    update: async (req, res) => {
        const { id } = req.params
        const {
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
        } = req.body

        const senha_hash = bcryptjs.hashSync(senha, 12)
   
        const clienteAlterado = await CadastroService.alteraCliente(
            id,
            nome,
            email,  
            telefone,
            senha_hash,
            data_nascimento
        ) 
        
        res.json(clienteAlterado)

    },
    delete: async (req, res) => {
        const { id } = req.params 
        await CadastroService.apagaCliente(id)
        res.json(id)
    }
}

module.exports = CadastroController;
