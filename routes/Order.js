const express = require("express");
const router = express.Router();
const order  = require("../controllers/Order");


router.get('/order',order.orderForm);
// router.delete('/order/deletebyusername/:name',order.deletebyusername);
// router.put('/order/updatebyid/:id',order.updatebyid);
// router.get('/order/getByname/:username',order.getByname);


module.exports = router;
