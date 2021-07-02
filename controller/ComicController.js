// const fs = require('fs');
// const path = require('path');
// const comicsdb = path.join(__dirname, '../comicdb.json');
const ComicService = require('../services/ComicService')

const ComicController = {
    storeComic: async (req, res) => {
        
        const { filename } = req.file;
        const {
            titulo,
            autor,
            ano,
            sinopse
        } = req.body;
        
        const { endereço } = await ComicService.createComic(
            filename,
            titulo,
            autor,
            ano,
            sinopse
            )

        res.json({
            url: `localhost:3000${ endereço }`
        });
        
    },

    readComic: async (req, res) =>{
        const { id } = req.params;
        const { endereço } = await ComicService.getComic(id);
        //return res.json(endereço);
        // return res.render('comicpage', {comic : comic })
        return res.render('viewer', {caminho: endereço})
    },

    updateComic: async (req, res) => {
        const { id } = req.params

        const { 
            titulo,
            autor,
            ano,
            sinopse,
        } = req.body

        const comic = await ComicService.updateValues(
            id,
            titulo,
            autor,
            ano,
            sinopse,
        )

        console.log(comic)

        if(comic === null) return res.status(400).render('not-found')
        console.log(comic.endereço)

        res.json({
            url: `localhost:3000${comic.endereço}`
        })

    },

    deleteComic: async (req, res) => {

        const { id } = req.params

        const comic = await ComicService.comicDestroyer(id)

        if(comic === null) return res.status(400).render('not-found');

        return res.json(comic)

    },

    findAssociation: async (req, res) => {
        const { id } = req.params
        const returnAssociation = await ComicService.relateTables(id)
        res.json(returnAssociation);
    },
}

module.exports = ComicController;