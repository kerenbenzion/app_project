const express = require("express");
const router = express.Router();

const AdminPageController = require("../controllers/admin-page-controller");

router.get("/admin-page", AdminPageController.getProducts);

module.exports = router;