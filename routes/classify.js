const express = require("express");
const router = express.Router();
const { classifyNumber } = require("../controllers/classifyController");

router.get("/classify-number", classifyNumber);

module.exports = router;
