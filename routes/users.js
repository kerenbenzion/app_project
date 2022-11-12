const express = require("express");
const router = express.Router();
const userscontroller = require("../controllers/users");

router.get('/users', userscontroller.getuserspage);
router.get('/users/getusers', userscontroller.getusers);
router.post('/users/:id', userscontroller.deleteuser);
router.put('/users/:id', userscontroller.edituser);
router.get('/users/:id', userscontroller.getuser);


module.exports = router;
