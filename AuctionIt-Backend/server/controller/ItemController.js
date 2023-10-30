const Joi = require("joi");
const Item = require("../model/item");
const Transaction = require("../model/transaction");

const ItemSchema = Joi.object({
	name: Joi.string().required(),
	description: Joi.string().required(),
	price: Joi.number().required(),
	qty: Joi.number(),
	imgSrc: Joi.string(),
});

const addItem = async (req, res) => {
	const { error } = ItemSchema.validate(req.body);
	if (error) {
		return res
			.status(400)
			.json({ Error: true, Message: error.details[0].message });
	}
	const { name, description, price, qty, imgSrc } = req.body;

	try {
		const newItem = new Item({
			name,
			description,
			price,
			seller: req.user._id,
			qty,
			imgSrc,
		});
		await newItem.save();

		return res.status(201).json({
			Error: false,
			Message: "Item added successfully",
			item: newItem,
		});
	} catch (error) {
		console.error("Error in adding item:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const buyItem = async (req, res) => {
	const itemId = req.params.itemId;
	const buyerId = req.user._id;

	try {
		const item = await Item.findById(itemId);

		if (!item) {
			return res.status(404).json({ Error: true, Message: "Item not found" });
		}

		if (item.qty < 1) {
			return res
				.status(400)
				.json({ Error: true, Message: "Item is out of stock" });
		}

		item.qty -= 1;
		await item.save();

		const transaction = new Transaction({
			item: itemId,
			seller: item.seller,
			buyer: buyerId,
			amount: item.price,
			isCompleted: true,
		});

		await transaction.save();

		return res
			.status(200)
			.json({ Error: false, Message: "Item purchased successfully" });
	} catch (error) {
		console.error("Error buying item: ", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const getAllAvailableItems = async (req, res) => {
	try {
		const items = await Item.find({ qty: { $gt: 0 } });

		if (!items) {
			return res
				.status(404)
				.json({ Error: true, Message: "No available items found" });
		}

		return res.status(200).json({ Error: false, Items: items });
	} catch (error) {
		console.error("Error getting available items: ", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};
const getItemById = async (req, res) => {
	const { itemId } = req.params;

	try {
		const item = await Item.findById(itemId);

		if (!item) {
			return res.status(404).json({ Error: true, Message: "Item not found" });
		}

		return res.status(200).json({ Error: false, Item: item });
	} catch (error) {
		console.error("Error in getting item by ID:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

module.exports = { addItem, buyItem, getAllAvailableItems, getItemById };
