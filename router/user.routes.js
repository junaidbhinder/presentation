const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/user.controller");
router.post("/registerUser", usercontroller.userRegister);
router.post("/loginUser", usercontroller.loginUser);
module.exports = router;    