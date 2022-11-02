const { resetWatchers } = require("nodemon/lib/monitor/watch");

const graphService = require("../services/graph")

async function orderDate(req,res){
    const result = await graphService.getOrderDates();
    res.render('../views/orderGraph', {orderData:result});
}


module.exports={
    orderDate,
}