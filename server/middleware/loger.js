const logger = (req, res, next) => {
    const date = new Date()
    console.log(`${date.toUTCString()} ${req.method} ${req.headers.origin} ${req.url}`);
    // console.log(req);
    next()
}


module.exports = { logger };