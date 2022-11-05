const { resetWatchers } = require("nodemon/lib/monitor/watch");
const session = require('../controllers/login')
function gethomepage(req, res) {
    session.foo(req, res);
    // res.render('../views/homepage');
}

module.exports = {
    gethomepage,
}