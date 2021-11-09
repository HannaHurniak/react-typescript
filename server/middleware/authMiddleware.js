const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token)
    if (token === 'true'){
      next();
    } else {
      res.status(403).send();
    }
}
module.exports = authMiddleware;