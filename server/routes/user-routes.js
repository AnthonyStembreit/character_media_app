//signup create user
//update other info by id
//delete
//get single user
const express = require('express');
const router = express.Router();
const { User } = require('../models');
var passport = require("../config/passport");

router.post("/signup", async (req, res) => {
    try {
        let newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})

router.get("/data", function (req, res) {
    if (!req.user) {
        res.json("no user here");
    } else {
        res.json({
            email: req.user.email,
            username: req.user.username
        });
    }
});

module.exports = router