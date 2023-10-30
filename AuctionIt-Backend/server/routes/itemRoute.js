const express = require("express");
const {
	addItem,
	buyItem,
	getAllAvailableItems,
	getItemById,
} = require("../controller/ItemController");
const { checkUserAuth } = require("../middlewares/auth-middleware");
const route = express.Router();

route.get("/get-all", getAllAvailableItems);
route.post("/add", checkUserAuth, addItem);
route.post("/buy/:itemId", checkUserAuth, buyItem);
route.get("/get-one/:itemId", getItemById);

module.exports = route;
