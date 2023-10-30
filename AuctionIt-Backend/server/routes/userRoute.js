const express = require("express");
const route = express.Router();

const {
	registerUser,
	loginUser,
	verifyEmail,
	getLoggedInUserInfo,
} = require("../controller/userController");
const { checkUserAuth } = require("../middlewares/auth-middleware");

route.post("/signup", registerUser);
route.post("/login", loginUser);
route.post("/verify-email", verifyEmail);
route.get("/getLoggedInUserInfo", checkUserAuth, getLoggedInUserInfo);

module.exports = route;
