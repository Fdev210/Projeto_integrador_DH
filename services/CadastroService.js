const CadastroModel = require('../models/CadastroModel');
const { v4: uuidv4 } = require('uuid');

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
    }
}

module.exports = CadastroService;
