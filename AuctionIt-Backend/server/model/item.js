const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
	seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	imgSrc: { type: String },
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	qty: { type: Number, default: 0 },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
