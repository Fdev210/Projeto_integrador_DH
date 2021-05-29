const fs = require('fs');
const path = require('path');
const comicsdb = path.join(__dirname, '../comicdb.json');
const ComicModel= require('../models/ComicModel');
const { v4: uuidv4 } = require('uuid');

const ComicService = {
    createComic: (filename) => {
        const newComic  = new ComicModel(uuidv4(), filename);

        let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        comicList = JSON.parse(comicList)

        comicList.push(newComic)
        const insertComic = JSON.stringify(comicList, null, 2)

        fs.writeFileSync(comicsdb, insertComic, {encoding : 'utf-8'})

        return newComic
    },

    getComic: (id) => {
        let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        comicList = JSON.parse(comicList)

        const comicData = comicList.find(elem => elem.id === id)
        return comicData 
    } 
}

module.exports = ComicService;