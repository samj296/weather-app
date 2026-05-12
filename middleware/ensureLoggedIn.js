module.exports = function ensuredLoggedIn(req, res){
    if (typeof req.isAuthenticated === "function" && req.isAuthenticated()){
        return next();
    };
    // if the request is coming from the Ajax then return JSON
    if(req.header.accept & req.header.accept.includes("application/json")){
        return res.status(401).json({error: true, errorMsg: "Session expired"})
    }
    // if the request is coming from normal browser navigation 
    return res.redirect("/");
};