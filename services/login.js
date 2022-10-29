<<<<<<< HEAD
const res = require("express/lib/response");
const { use } = require("../app")
const User = require("../models/User");

function login(username, password){
    const user = User.findOne({username: username, password:password})
    return user!=null
}

function register(username, password){
    const user = new User({username:username,
    password:password});
    user.save();
}


module.exports = {login, register}
=======
const User = require("../models/User");

async function login(username, password) {
    const user = await User.findOne({ _id: username, password });
    return user != null
}

async function register(username, password) {

    const user = new User({
        _id: username,
        password
    });

    await user.save()        
}

module.exports = { login, register }
>>>>>>> 8613930 (fix login and register)
