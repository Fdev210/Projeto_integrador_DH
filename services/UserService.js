const db = require("../database/models")
const jwt = require("jsonwebtoken")
const database = require('../database/models/index');

const jwtSecret = process.env.JWT_SECRET
const { Op } = require('sequelize')

const UserService = {

    getEmail: async (email) => {
        const findEmail = await db.Cliente.findOne({
            where: {
                email,
            }
        });
        return findEmail
    },

    tokenize: async(cliente) => {
        const token = await jwt.sign(
            {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email,
                tipo_usuario: cliente.tipo_usuario
            },
            jwtSecret,
            { expiresIn: '48h' }    
    )
    return token
    },

    clientePreferencia: async (id) => {
        const cliente = await database.Cliente.findOne({
            where: {
                id
            },
            include: {
                model: database.Preferencia,
                required: true
            }
        });
        
        const { Preferencia } = cliente
        const preferenciasIds = Preferencia.map( elem => elem.id)

        const clientePreferencias = await database.Preferencia.findAll({
            where: { 
                id: { [Op.in]: preferenciasIds}
            },
            include: [{ model: database.Comic }]
        });

        return clientePreferencias
    }
}

module.exports = UserService;