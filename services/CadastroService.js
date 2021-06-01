const CadastroModel = require('../models/CadastroModel');
const { v4: uuidv4 } = require('uuid');

const database = require('../database/models/index')
 
const CadastroService = {
    listaDeUsuarios: (nomeUsuario) => {
        const listaUsuario = CadastroService.listaUsuarios(); 
        let usuario = listaUsuario.find(item => item.nome === nomeUsuario);

        if (!usuario) {
            usuario = listaUsuario[0];
        }

        return usuario;
    },
    
    criaUsuario: async ( 
        nome,
        email,  
        telefone,
        senha,
        data_nascimento
        ) => {
        const novoCliente = await database.Cliente.create({
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
        })
        return novoCliente        
    },

    alteraCliente: async (
        id,
        nome,
        email,  
        telefone,
        senha,
        data_nascimento) => {

        const clienteAlterado = await database.Cliente.update({
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
        }, {
            where: {
                id
            }
        })
        return clienteAlterado 
        
    },
    apagaCliente: async (id) => {
        await database.Cliente.destroy({
            where: {
                id
            }
        })
        return id

    },

    buscaClientesLista: async () => {
        const resultados = await database.Cliente.findAll()
        return resultados        
    },
    buscaClienteNome: async (id) => {
        const resultado = await database.Cliente.findAll({
            where: {
                nome: id
            }
        })
        return resultado
    },
    buscaPagina: async (pagina) => {
        const resultado = await database.Cliente.findAll({
            offset: (pagina - 1) * 3,
            limit: 3
        })
        return resultado

    }
}

module.exports = CadastroService;
