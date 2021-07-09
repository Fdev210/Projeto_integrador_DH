// const fs = require('fs');
// const path = require('path');
// const comicsdb = path.join(__dirname, '../comicdb.json');
// const ComicModel= require('../models/ComicModel');
// const { v4: uuidv4 } = require('uuid');

const database = require('../database/models/index')

const ComicService = {
    createComic: async (
        comicThings,
        titulo,
        autor,
        ano,
        sinopse,
        ) => {

        const { antevisao } = comicThings

        const comicPages = antevisao.map(elem => {
            const { filename } = elem;
            return filename
        })

        const addComic  = await database.Comic.create({
            titulo,
            autor,
            ano,
            sinopse,
            capa: `uploads/${comicThings['capa'][0].filename}`,
            antevisao: [
                        `/uploads/${comicPages[0]}`,
                        `/uploads/${comicPages[1]}`,
                        `/uploads/${comicPages[2]}`,
                       ],
            endereço: `/uploads/${comicThings['pdf'][0].filename}`
        })

        return addComic
    },

    getComic: async (id) => { 
        const resultado = await database.Comic.findByPk(id)
        return resultado
    },  

    updateValues: async(
        id,
        comicThings,
        titulo,
        autor,
        ano,
        sinopse) => {

            const { antevisao } = comicThings

            const comicPages = antevisao.map(elem => {
                const { filename } = elem;
                return filename
            })

            await database.Comic.update({
                titulo,
                autor,
                ano,
                sinopse,
                capa: `uploads/${comicThings['capa'][0].filename}`,
                antevisao: [
                            `/uploads/${comicPages[0]}`,
                            `/uploads/${comicPages[1]}`,
                            `/uploads/${comicPages[2]}`,
                           ],
                endereço: `/uploads/${comicThings['pdf'][0].filename}`
            }, {
                where: {
                    id
                }
            })        
            const dataComic = await database.Comic.findByPk(id)
            return dataComic.dataValues
    },

    comicDestroyer: async (id) => {

        const targetValues = await database.Comic.findByPk(id)
        const target = await database.Comic.destroy({
            where: { id }
        });
        
        return targetValues.dataValues
        // let comicList = fs.readFileSync(comicsdb, {encoding : 'utf-8'})
        // comicList = JSON.parse(comicList)

        // const comicIndex = comicList.findIndex(elem => elem.id == id)
        // if(comicIndex == -1) return comicIndex
                
        // const newComicList = comicList.filter(elem => elem.id != id)
        // comicList = JSON.stringify(newComicList, null, 2)

        // fs.writeFileSync(comicsdb, comicList, {encoding : 'utf-8'})

        // return newComicList
        
        
    },

    relateTables: async (id) => {
        const joinTables = await database.Comic.findByPk(id, {
            include: [{ model: database.Preferencia}]
        });
        return joinTables
    },
}

module.exports = ComicService;