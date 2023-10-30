const Joi = require("joi");
const Bidding = require("../model/bidding");
const Item = require("../model/item");

const placeBidSchema = Joi.object({
	itemId: Joi.string().required(),
	bidAmount: Joi.number().min(0).required(),
});
const placeBid = async (req, res) => {
	const { error } = placeBidSchema.validate(req.body);

	if (error) {
		return res
			.status(400)
			.json({ Error: true, Message: error.details[0].message });
	}
	const { itemId, bidAmount } = req.body;
	const bidder = req.user._id;

	try {
		const item = await Item.findOne({
			_id: itemId,
			qty: { $gt: 0 },
		});

		if (!item) {
			return res.status(404).json({
				Error: true,
				Message: "Item not found or not available for bidding",
			});
		}

		const maxBid = await Bidding.findOne({ item: itemId }).sort({
			bidAmount: -1,
		});

		if (maxBid && bidAmount <= maxBid.bidAmount) {
			return res.status(400).json({
				Error: true,
				Message: "Bid amount should be greater than the previous bid amount",
			});
		}

		const newBid = new Bidding({
			item: itemId,
			bidder,
			bidAmount,
		});

		await newBid.save();

		return res
			.status(200)
			.json({ Error: false, Message: "Bid placed successfully", bid: newBid });
	} catch (error) {
		console.error("Error in placing bid:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const acceptBid = async (req, res) => {
	const { bidId, itemId } = req.body;
	const sellerId = req.user._id;

	try {
		const bid = await Bidding.findById(bidId);

		if (!bid) {
			return res.status(404).json({ Error: true, Message: "Bid not found" });
		}

		const item = await Item.findById(itemId);

		if (!item) {
			return res.status(404).json({ Error: true, Message: "Item not found" });
		}
		if (sellerId.toString() !== item.seller.toString()) {
			return res.status(403).json({
				Error: true,
				Message: "Unauthorized: Only the seller can accept the bid",
			});
		}

		item.price = bid.bidAmount;
		await item.save();
		bid.isBidAccepted = true;
		await bid.save();

		return res
			.status(200)
			.json({ Error: false, Message: "Bid accepted successfully" });
	} catch (error) {
		console.error("Error accepting bid: ", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const getBiddingDataByItemId = async (req, res) => {
	const { itemId } = req.params;

	try {
		const biddingData = await Bidding.find({ item: itemId });

		if (!biddingData) {
			return res
				.status(404)
				.json({ Error: true, Message: "Bidding data not found" });
		}

		return res.status(200).json({ Error: false, BiddingData: biddingData });
	} catch (error) {
		console.error("Error in getting bidding data by item ID:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

module.exports = { placeBid, acceptBid, getBiddingDataByItemId };
