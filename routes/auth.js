const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
    let authHeader = req.headers['authorization']
    if (authHeader == null) {
        authHeader = req.body.authorization
        if(authHeader == null) return res.sendStatus(401)
    }
    jwt.verify(authHeader, process.env.TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded.user;
        next();
    });
}
