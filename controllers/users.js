const { resetWatchers } = require("nodemon/lib/monitor/watch");
const Users = require("../models/User");
function getuserspage(req, res) {
    res.render('../views/users', { username: req.session.username });
}

function getusers(req, res) {
    Users.find().then(results => {
        res.json(results)
    });
}

module.exports = {
    getuserspage,
    getusers
}