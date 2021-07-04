const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function auth(req, res, next) {
    const token = req.session.usuario;
    if(!token) return res.redirect('/users/login')
    
    try {
        const decodifique = jwt.verify(token, jwtSecret);
        req.usuario = decodifique
        next();
    } catch (err) {
        return res.redirect("/users/login");
    }
}

module.exports = auth;