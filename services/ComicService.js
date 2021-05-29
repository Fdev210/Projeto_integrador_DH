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
        comicList = JSON.stringify(comicList, null, 2)

        fs.writeFileSync(comicsdb, comicList, {encoding : 'utf-8'})

        return newComic
    },

    getComic: (id) => {
        let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        comicList = JSON.parse(comicList)

        const comicData = comicList.find(elem => elem.id === id)
        return comicData 
    }, 

    updateValues: (id, nome) => {
        let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        comicList = JSON.parse(comicList)

        const comicIndex = comicList.findIndex(elem => elem.id == id)
        if(comicIndex == -1) return comicIndex;

        let updatedComic = new ComicModel(id, nome)
        comicList[comicIndex] = updatedComic


        comicList = JSON.stringify(comicList, null, 2)
        fs.writeFileSync(comicsdb, comicList, {encoding : 'utf-8'})

        return updatedComic

    },

    comicDestroyer: (id) => {
        let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        comicList = JSON.parse(comicList)

        const comicIndex = comicList.findIndex(elem => elem.id == id)
        if(comicIndex == -1) return comicIndex
                
        const newComicList = comicList.filter(elem => elem.id != id)
        comicList = JSON.stringify(newComicList, null, 2)

        fs.writeFileSync(comicsdb, comicList, {encoding : 'utf-8'})

        return newComicList
        
        
    }
}

module.exports = ComicService;