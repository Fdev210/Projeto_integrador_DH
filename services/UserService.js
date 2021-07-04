const db = require("../database/models")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

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
    }
}

module.exports = UserService;