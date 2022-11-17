const express = require("express");
const router = express.Router();
const csvController = require("../controller/csv.controller");
router.post("/csvFileAdd", csvController.csvjsonFile);
module.exports = router;    