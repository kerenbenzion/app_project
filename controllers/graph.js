const { resetWatchers } = require("nodemon/lib/monitor/watch");
function getgraph(req,res){
    res.render('../views/graphs');
}

module.exports={
    getgraph,
}