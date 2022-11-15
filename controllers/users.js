const Users = require("../models/User");
function getuserspage(req, res) {
    if (req.session.username != "admin") {
        res.render('../views/404.ejs')
    } else {
        res.render('../views/users', { username: req.session.username });
    }
}

function getusers(req, res) {
    Users.find().then(results => {
        res.json(results)
    });
}
function deleteuser(req, res) {
    let id = req.params.id

    Users.findByIdAndDelete(id, function (err, response) {
        console.log(response)
        if (response != null) {
            res.send("success")
        }
        else {
            res.status(400).send("user not found in db")
        }
    })

}

function edituser(req, res) {
    let id = req.params.id
    Users.findByIdAndUpdate(id, req.body, function (err, response) {
        console.log(response)
        if (response != null) {
            res.send("success")
        }
        else {
            res.status(400).send("user not found in db")
        }
    })
}

function getuser(req, res) {
    let id = req.params.id
    Users.findById(id, function (err, response) {
        console.log(response)
        if (response != null) {
            res.status(200).json(response)
        }
        else {
            res.status(400).send("user not found in db")
        }
    })
}
module.exports = {
    getuserspage,
    deleteuser,
    getusers,
    edituser,
    getuser
}