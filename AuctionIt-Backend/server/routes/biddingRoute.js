const express = require("express");
const { checkUserAuth } = require("../middlewares/auth-middleware");
const {
	placeBid,
	acceptBid,
	getBiddingDataByItemId,
} = require("../controller/bidController");

const route = express.Router();

route.post("/place-bid", checkUserAuth, placeBid);
route.post("/accept-bid", checkUserAuth, acceptBid);
route.get("/getBiddingData/:itemId", getBiddingDataByItemId);

module.exports = route;
