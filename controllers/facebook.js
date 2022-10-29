const facebookService = require("../services/facebook_server");
const { use } = require("../routes/facebook");


function postfacebook(req,res){
    const {msg} = req.body
    const result = facebookService.publishPost(msg)
    console.log(result)
    if(result){
        res.redirect('/products')
    }

}
function facebookForm(req,res){
    res.render("facebook",{})
}

module.exports={
    facebookForm,
    postfacebook
}