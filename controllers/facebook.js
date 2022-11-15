const facebookService = require("../services/facebook_server");
const { use } = require("../routes/facebook");


function postfacebook(req, res) {
    const { msg } = req.body
    const result = facebookService.publishPost(msg)
    if (result) {
        console.log(result)
    }

}
function facebookForm(req, res) {
    if (req.session.username != "admin") {
        res.render('../views/404.ejs')
    } else {
        res.render("facebook", { username: req.session.username })
    }

}

module.exports = {
    facebookForm,
    postfacebook
}