const CadastroModel = require('../models/CadastroModel');
const { v4: uuidv4 } = require('uuid');

const CadastroService = {
    listaUsuarios: () => {
        const teste = new CadastroModel(
            1, 
            'testenome', 
            'teste@email.com',
            '9999-9999',
            'senha',
            'senha',
            '01-jan-2000');    
                  
        return [teste];
    },
    listaDadoUsuario: (nomeUsuario) => {
        const listaUsuario = CadatroService.listaUsuarios(); 
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
