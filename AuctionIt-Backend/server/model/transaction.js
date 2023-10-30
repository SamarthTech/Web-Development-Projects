const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
	{
		item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
		seller: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		buyer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		amount: { type: Number, required: true },
		isCompleted: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
