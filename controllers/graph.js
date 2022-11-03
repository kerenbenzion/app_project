const { resetWatchers } = require("nodemon/lib/monitor/watch");
const graphService = require("../services/graph")

async function getPricesGraph(req,res){
    const priceResult = await graphService.getPrices();
    res.render('../views/graphs', {priceData:priceResult});
}
async function getOrderdatesGraph(req,res){
    const orderResult = await graphService.getOrderDates();
    res.render('../views/graphs', {orderData:orderResult});
}
module.exports={
    getPricesGraph, getOrderdatesGraph
}