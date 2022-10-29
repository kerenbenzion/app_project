const User = require("../models/User");
const bcrypt = require("bcrypt");
const alert = require("alert");


async function login(username, password) {
    const user = await User.findOne({ _id: username });
    if(!user._id){
        throw new Error('Incorrect user or password')
    }
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){
        throw new Error('Incorrect user or password')
    }
    return user != null
}

async function register(username, password) {
    const user = await User.findOne({ _id: username });
    if(user){
        alert("Username already exists. Please try another username.")
        throw new Error('Username already exists')
    }
    const newuser = new User({
        _id: username,
        password
    });

    await newuser.save()        
}

module.exports = { login, register }
