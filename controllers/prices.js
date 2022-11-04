const { resetWatchers } = require("nodemon/lib/monitor/watch");

const graphService = require("../services/graph")

async function price(req,res){
    const result = await graphService.getPrices();
    res.render('../views/prices', {priceData:result});
}


module.exports={
    price,
}