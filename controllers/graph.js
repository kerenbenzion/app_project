const { resetWatchers } = require("nodemon/lib/monitor/watch");
const graphService = require("../services/graph")

async function getMaxOrder(req,res){
    const maxOrderResult = await graphService.getMaxOrder();
    console.log("hey")

    console.log(maxOrderResult)
    res.render('../views/graphs', {maxOrder:maxOrderResult});
}

module.exports={
    getMaxOrder
}