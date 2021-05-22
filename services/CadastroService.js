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
    
    criaUsuario: ( 
        nome,
        email,
        telefone,
        senha,
        confirmaSenha,
        nascimento
        ) => {             
        const novoUsuario = new CadastroModel(
            uuidv4(),
            nome,
            email,
            telefone,
            senha,
            confirmaSenha,
            nascimento 
            );

        return novoUsuario;
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
