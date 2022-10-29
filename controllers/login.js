const loginService = require("../services/login");
const { use } = require("../routes/login");

function isLoggedIn(req,res, next){
    if(req.session.username!= null)
        return next()
    else
        res.redirect('/login')

}

function foo(req,res){
    res.render("foo",{username:req.session.username})
}

function loginForm(req,res){
    res.render("login",{})
}

function registerForm(req,res){
    res.render("register",{})
}

function logout(req,res){
    req.session.destroy(()=>{res.redirect('/login')})
}

function login(req,res){
    const {username, password} = req.body
    const result = loginService.login(username,password)
    if(result){
        req.session.username = username
        res.redirect('/')
    }
    else{
        res.redirect('/login?error=1')
    }
}
function register(req,res){
    const {username, password} = req.body
    try{
        loginService.register(username,password)
        req.session.username = username
        res.redirect('/login')
    }
    catch(e){
        res.redirect('/register?error=1')

    }

}

module.exports={
    register,
    login,
    logout,
    loginForm,
    registerForm,
    foo,
    isLoggedIn
}