const mongoose = require("mongoose");

const biddingSchema = new mongoose.Schema(
	{
		item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
		bidder: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		bidAmount: { type: Number, required: true },
		isBidAccepted: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const Bidding = mongoose.model("Bidding", biddingSchema);

module.exports = Bidding;
