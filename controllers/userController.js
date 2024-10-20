const mongoose = require('mongoose');
const User = require("../models/user");
const getUsers= async(req, res) =>{
    const users=await User.find();
    res.send(users);
}

const addUsers= async(req, res) =>{
    const users =new User({
        firstName : "Shahzeb",
        lastName : "Naqvi",
        email : "shahzeb.naqvi12@gmail.com",
        password : "3224354354",
    });
    const adduser =await User.create(users);
    res.send(adduser);
}
module.exports ={getUsers,addUsers};