const facebookService = require("../services/facebook_server");
const { use } = require("../routes/facebook");
const alert = require("alert");


function postfacebook(req,res){
    const {msg} = req.body
    const result = facebookService.publishPost(msg)
    console.log(result)
    if(result){
        alert("Post has been published!")
        res.render("facebook",{})

    }
}
function facebookForm(req,res){
    res.render("facebook",{})
}

module.exports={
    facebookForm,
    postfacebook
}