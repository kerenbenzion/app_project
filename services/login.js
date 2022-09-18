const { use } = require("../app")
const User = require("../models/User");

function login(username, password){
    const user = User.findOne({username: username, password})
    return user!=null
}

function register(username, password){
    const user = new User({username:username,
    password:password});
    user.save()
}

module.exports = {login, register}