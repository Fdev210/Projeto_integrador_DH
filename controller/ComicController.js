const fs = require('fs');
const path = require('path');
const comicsdb = path.join(__dirname, '../comicdb.json');
const CadastroService = require('../services/CadastroService');
const ComicService = require('../services/ComicService')
const CadastroController = require('./CadastroController');

const ComicController = {
    storeComic: (req, res) => {
        
        const { filename } = req.file;
        
        ComicService.createComic(filename)

        res.json({
            url: `localhost:3000/uploads/${filename}`
        });
        
    },

    index: (req, res) =>{
        const { id } = req.params;
        const comic = ComicService.getComic(id);
        // return res.json(comic);
        return res.render('comicpage', {comic : comic })
    }
}

module.exports = ComicController;