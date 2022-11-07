const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/users");

router.get('/users', userscontroller.getuserspage);
router.get('/users/getusers', userscontroller.getusers);
router.delete('/users/deleteuser/:id', userscontroller.deleteuser);

module.exports = router;
