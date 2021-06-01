const fs = require('fs');
const path = require('path');
const listaDeCadastro = path.join(__dirname, '../listaDeCadastro.json')
const CadastroService = require("../services/CadastroService");
const bcryptjs = require('bcryptjs');

const CadastroController = {
    index: (req, res) => {
       res.render('cadastroUsuario');

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

    create: async (req, res) => {
        const {
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
        } = req.body

        const cliente = await CadastroService.criaUsuario(
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
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
   
        const clienteAlterado = await CadastroService.alteraCliente(
            id,
            nome,
            email,  
            telefone,
            senha,
            data_nascimento
        ) 
        
        res.json(clienteAlterado)

    },
    delete: async (req, res) => {
        const { id } = req.params
        await CadastroService.apagaCliente(id)
        res.json(id)
    },

    // delete: (req, res) => {

    //     let { id } = req.params;
        
    //     fs.readFile(listaDeCadastro, 'utf8', (err, cadastroJson) => {
    //         if(err) throw err;
            
    //         let arrayCadastro = JSON.parse(cadastroJson);

    //         const indexId = arrayCadastro.findIndex(elem => elem.id == id);
    //         let novoArray = arrayCadastro.filter(elem => elem.id != id);
            
    //         if(indexId == -1) return res.status(400).render('not-found');
                            
    //         const novaLista = JSON.stringify(novoArray, null, 2)
            
    //         fs.writeFile(listaDeCadastro, novaLista, err => {
    //             if (err) throw err;
    //             console.log('Usuário excluído com sucesso')
    //         });
            
    //         return res.json(novoArray);
    //     });
    // },

    logged: (req, res) => {
        let { senha } = req.body
        let senhacript = []
    }
}

module.exports = CadastroController;
