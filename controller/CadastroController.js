const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')
const CadastroService = require("../services/CadastroService");
const bcryptjs = require('bcryptjs');

const CadastroController = {
    index: (req, res) => {
       res.render('cadastroUsuario');
    //     const { nome } = req.query;
    //     const usuario = CadastroService.listaUsuarios(nome);        
    //     return res.json(usuario);
    },

    create: (req,res) => {
        fs.readFile(listaDeCadastro, 'utf-8', (err, cadastroJson) => {
            if(err) throw err;

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
            
            usuario.senha = bcryptjs.hashSync(senha, 10)
            
            let arrayCadastro = JSON.parse(cadastroJson);

            arrayCadastro.push(usuario);

            const insereUsuario = JSON.stringify(arrayCadastro, null, 2)

            fs.writeFile(listaDeCadastro, insereUsuario, err => {
                if(err) throw err;
                res.send('Usuario cadastrado com sucesso!');
            })

            return res.json(usuario);

        })  
    },

    read: (req, res) => {
        fs.readFile(listaDeCadastro, 'utf8', (err, cadastroJson) => {
            if (err) throw err;
            const listaCadastro = JSON.parse(cadastroJson)
            return res.json(listaCadastro);
        })
    },

    update: (req,res) => {
        const { id } = req.params;

        const {
            nome,
            email,
            telefone,
            senha,
            confirmaSenha,
            nascimento
        } = req.body

        fs.readFile(listaDeCadastro, 'utf8', (err, cadastroJson) => {
            if (err) throw err;
            
            const arrayCadastro = JSON.parse(cadastroJson);

            let indexId = arrayCadastro.findIndex(elem => elem.id == id)
            
            if(indexId == -1) return res.status(400).render('not-found');
            
            for(let usuario of arrayCadastro) {
                if(usuario.id == id) {
                    usuario.name = nome,
                    usuario.email = email,
                    usuario.telefone = telefone,
                    usuario.senha = senha,
                    usuario.confirmaSenha = confirmaSenha,
                    usuario.nascimento = nascimento  
                }     
            }
            
            let atualizaUsuario = arrayCadastro[indexId];

            const listaAtualizada = JSON.stringify(arrayCadastro, null, 2);
            fs.writeFile(listaDeCadastro, listaAtualizada, err => {
                if(err) throw err;
                console.log('Usuario atualizado com sucesso!')
                
            })       
            
            return res.json(atualizaUsuario);
        })


    },

    delete: (req, res) => {

        let { id } = req.params;
        
        fs.readFile(listaDeCadastro, 'utf8', (err, cadastroJson) => {
            if(err) throw err;
            
            let arrayCadastro = JSON.parse(cadastroJson);

            const indexId = arrayCadastro.findIndex(elem => elem.id == id);
            let novoArray = arrayCadastro.filter(elem => elem.id != id);
            
            if(indexId == -1) return res.status(400).render('not-found');
                            
            const novaLista = JSON.stringify(novoArray, null, 2)
            
            fs.writeFile(listaDeCadastro, novaLista, err => {
                if (err) throw err;
                console.log('Usuário excluído com sucesso')
            });
            
            return res.json(novoArray);
        });
    },

    logged: (req, res) => {
        let { senha } = req.body
        let senhacript = []
    }
}

module.exports = CadastroController;
