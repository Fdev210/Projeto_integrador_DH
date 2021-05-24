const ComicModel= require('../models/ComicModel');
const { v4: uuidv4 } = require('uuid');

const ComicService = {
    createComic: (filename) => {
        const newComic  = new ComicModel(uuidv4(), filename);
        return newComic
    }
}

module.exports = ComicService;