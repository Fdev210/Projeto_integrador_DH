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
        // return res.json(cliente)
        const preferencias = await database.Preferencia.findAll({attributes: ['id','preferencias']})
        const preferencias_clientes = await database.ClientePreferencia.findAll({where: {clientes_id: id}, attributes: ['preferencia_id']})
        let pref_clientes = []
        preferencias_clientes.forEach(element => {
            pref_clientes.push(element.dataValues.preferencia_id)
        });     
        res.render('cadastroMinhaConta', {preferencias: preferencias, cliente: cliente, preferencias_clientes: pref_clientes});
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
            data_nascimento,
            preferenciasCliente
        } = req.body

   
        const clienteAlterado = await CadastroService.alteraCliente(
            id,
            nome,
            email,  
            telefone,
            senha,
            data_nascimento,
            preferenciasCliente
        ) 
        
        res.json(clienteAlterado)

    },
    delete: async (req, res) => {
        const { id } = req.params 
        await CadastroService.apagaPreferenciasCliente(id)
        await CadastroService.apagaCliente(id)
        res.json(id)
    }
}

module.exports = CadastroController;
