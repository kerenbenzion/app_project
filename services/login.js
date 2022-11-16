const User = require("../models/User");
const bcrypt = require("bcrypt");
const alert = require("alert");


async function login(username, password) {
    console.log(username)
    if(!username|| !password){
        alert("Please insert username and password")
        return null
    }
    const user = await User.findOne({ _id: username});
    if (user) {
        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            alert("Incorrect user or password")
            return null
        }
    }
    else{
        alert("Incorrect user or password")
        return null
    }
    return user != null
}

async function register(username, password, phonenumber, address, isAdmin) {
    const user = await User.findOne({ _id: username });
    if (user) {
        alert("Username already exists. Please try another username.")
    }
    const newuser = new User({
        _id: username,
        password: password,
        phonenumber: phonenumber,
        Address: address,
        isAdmin
    });

    await newuser.save()
}

module.exports = { login, register }