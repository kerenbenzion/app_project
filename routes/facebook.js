const express = require("express");
const router = express.Router();
const facebookController  = require("../controllers/facebook");

router.get('/facebook',facebookController.facebookForm);
router.post('/facebook',facebookController.postfacebook);

module.exports = router;
