const { resetWatchers } = require("nodemon/lib/monitor/watch");
function gethomepage(req,res){
    res.render('../views/homepage');
}

module.exports={
    gethomepage,
}