const fs = require('fs');
const path = require('path');
const comicsdb = path.join(__dirname, '../comicdb.json')
const CadastroService = require('../services/CadastroService');
const ComicService = require('../services/ComicService')
const CadastroController = require('./CadastroController');

const Filecontroller = {
    storeFile: (req, res) => {
        
        const { filename } = req.file;
        
        fs.readFile(comicsdb, 'utf-8', (err, comicsList) => {
            if(err) throw err;
        
            const comic = ComicService.createComic(filename)

            let comicArray = JSON.parse(comicsList)
            comicArray.push(comic)

            const insertComic = JSON.stringify(comicArray, null, 2)

            fs.writeFile(comicsdb, insertComic, err => {
                if(err) throw err;
                console.log('Quadrinho inserido com sucesso')
            });
        });

        res.json({
            url: `localhost:3000/uploads/${filename}`
        });
        
    }
}

module.exports = Filecontroller;