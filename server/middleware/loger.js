const logger = (req, res, next) => {
    console.log(`${req.method} ${req.headers.origin} ${req.url}`);
    // console.log(req);
    next()
}


module.exports = { logger };