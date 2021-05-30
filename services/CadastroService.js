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
        NOME,
        EMAIL,  
        TELEFONE,
        SENHA,
        DATA_NASCIMENTO
        ) => {
        const novoCliente = await database.Cliente.create({
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        })
        return novoCliente        
    },

    alteraCliente: async (
        id,
        NOME,
        EMAIL,  
        TELEFONE,
        SENHA,
        DATA_NASCIMENTO) => {

        const clienteAlterado = await database.Cliente.update({
            NOME,
            EMAIL,  
            TELEFONE,
            SENHA,
            DATA_NASCIMENTO
        }, {
            where: {
                id
            },
            returning: true,
            plain: true
        })
        return clienteAlterado 
        
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
