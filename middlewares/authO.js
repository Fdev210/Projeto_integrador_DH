const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function authO(req, res, next) {
    if(req.usuario.tipo_usuario != "admin") return res.status(401).send("unauthorized")
    next()
}
module.exports = authO