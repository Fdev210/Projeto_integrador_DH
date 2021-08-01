const database = require('../database/models/index');

const AdminController = {
    index: (req, res) =>{

    },

    admin: async (req, res) => {
        const { id } = req.params
        const preferencias = await database.Preferencia.findAll({attributes: ['id','preferencias']});
        const comic = await database.Comic.findByPk(id, {
            include: [{ model: database.Preferencia }]
        });

        res.render('adminComics', {
            preferencias: preferencias,
            comic: comic
        })
    }
}

module.exports = AdminController;