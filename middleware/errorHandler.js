module.exports = (err, req, res, next) => {
    // if the error is already sent then we let express safely handle the error
    if (res.headerSent) return next(err);

    // if the error is not sent then
    const status = err.status ||500;
    console.log("An error has occured ", err);

    res.status(status).json({
        error: true,
        errorMsg: err.message || "Something went wrong",
        status 
    });
};