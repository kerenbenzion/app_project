const express = require("express");
const router = express.Router();
const maps  = require("../controllers/maps");

router.get('/maps', maps.showmaps);
router.get('/branches', maps.getbranches);
// router.post('/maps', maps.addRoomToMap);

module.exports = router;
