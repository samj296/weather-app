const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req,res) => {
    const {username, email, password} = req.body;

    if(!username || !password || !email) return res.status(400).json({
        error: true,
        errorMsg: "Missing required fields"
    });

    

    try{
        //checking if the email is already in use
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({
            error: true,
            errorMsg: "Unable to create user please check the details"
        });
        //hashing password
        const passwordHash = await bcrypt.hash(password, 10);
        //creating user
        const user = await User.create({username, email, passwordHash});
        return res.status(200).json({
            error:false,
            username: user.username,
            email: user.email
        })
    }catch(err){
        console.log("Signup error ", err);
        return res.status(500).json({
            error: true,
            errorMsg: "Unable to signup, check username and password"
        });
    };
};