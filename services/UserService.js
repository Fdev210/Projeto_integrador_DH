const db = require("../database/models")

const UserService = {

    getEmail: async (email) => {
        const findEmail = await db.Cliente.findOne({
            where: {
                email,
            }
        });
        return findEmail
    }
}

module.exports = UserService;