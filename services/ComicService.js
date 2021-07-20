// const fs = require('fs');
// const path = require('path');
// const comicsdb = path.join(__dirname, '../comicdb.json'); 
// const ComicModel= require('../models/ComicModel');
// const { v4: uuidv4 } = require('uuid');

const { sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize')
const database = require('../database/models/index')

const ComicService = {
    createComic: async (
        comicThings,
        titulo,
        autor,
        ano,
        sinopse,
        preferenciasComic
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

        const idComic = await addComic.dataValues.id

        preferenciasComic.forEach(async (preferencia) => {
            const novaPreferencia = await database.ComicPreferencia.create({
                comics_id: idComic,
                preferencia_id: preferencia
            })
        })

        return addComic
    },

    getComic: async (id) => { 
        const comic = await database.Comic.findByPk(id, {
            include: [{model: database.Preferencia}]
        })
        // const relacionados = await sequelize.query(`SELECT capa FROM comics
        //                                             INNER JOIN comics_preferencias
        //                                             ON comics.id = comics_preferencias.comics_id
        //                                             WHERE comics_preferencias.preferencia_id = :preferenciaId`,
        //                                             {
        //                                                 replacements:{preferenciaId: comic.Preferencia[0].id},
        //                                                 type: QueryTypes.SELECT
        //                                             })

        const relacionados = await database.Preferencia.findAll({
            where: { preferencias: comic.Preferencia[0].preferencias },
            include: [{ model: database.Comic}]
        })
        const all = []
        all.push(comic, relacionados)
        return all
    },
    
    getAllComics : async () => {
        comicsList = await database.Comic.findAll({
            attributes: ['id', 'titulo', 'autor', 'ano', 'sinopse', 'capa', 'createdAt', 'updatedAt'] 
        })

        return comicsList
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
        
    },

    relateTables: async (id) => {
        const joinTables = await database.Comic.findByPk(id, {
            include: [{ model: database.Preferencia }]
        });
        return joinTables
    },
}

module.exports = ComicService;