const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const passport = require("../auth/passport");
const ensureLoggedIn = require("../middleware/ensureLoggedIn");

//Unprotected route
router.post("/signup", userController.createUser);

router.post("/", passport.authenticate("local"), (req, res) => {
    res.status(200).json({
        error: false,
        redirect: "/homepage"
    });
});



//protected route


module.exports = router;