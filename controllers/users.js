const { resetWatchers } = require("nodemon/lib/monitor/watch");
function getusers(req, res) {
    res.render('../views/users');
}

module.exports = {
    getusers,
}