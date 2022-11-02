const { resetWatchers } = require("nodemon/lib/monitor/watch");
const graphService = require("../services/graph")

async function getgraph(req,res){
    const result = await graphService.getPrices();
    res.render('../views/graphs', {priceData:result});
}

module.exports={
    getgraph,
}