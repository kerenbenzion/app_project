const { resetWatchers } = require("nodemon/lib/monitor/watch");
const graphService = require("../services/graph")

async function getMaxOrder(req, res) {
    const maxOrderResult = await graphService.getMaxOrder();
    console.log("hey")

    console.log(maxOrderResult)
    if (req.session.username != "admin") {
        res.status(404).send("page does not exists")
    } else {
        res.render('../views/graphs', { maxOrder: maxOrderResult, username: req.session.username });
    }

}

module.exports = {
    getMaxOrder
}