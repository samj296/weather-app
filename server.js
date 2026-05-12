require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const userRoutes = require('./routes/userRoutes')
const passport = require("./auth/passport")

// routes




const app = express();

app.use((req, res, next) => {
    next();
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

//imp middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(
    session({
        secret: process.env.Session_Secret || "dev_secret_change_me",
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes

app.use("/", userRoutes)


// errorHandler


mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT,() =>{
            console.log(`App is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) =>{
        console.log("Mongo connection error ", err);
    });