const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

function foo(req, res) {
  res.render("../views/homepage", { username: req.session.username })
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
    res.redirect('/login?error=1')
}

async function register(req, res) {
  const { username, password, phonenumber, address, isAdmin } = req.body
  console.log(req.body)
  try {
    await loginService.register(username, password, phonenumber, address, isAdmin)
    req.session.username = username
    res.redirect('/login')
  }
  catch (e) {
    console.log(e)
    res.redirect('/register?error=1')
  }
}

module.exports = {
  login,
  loginForm,
  register,
  registerForm,
  logout,
  foo,
  isLoggedIn
}