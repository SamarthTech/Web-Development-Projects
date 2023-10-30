import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const List = () => {
	const navigate = useNavigate();
	const [itemData, setItemData] = useState({
		imgSrc: "",
		name: "",
		description: "",
		price: "",
		qty: "",
	});

	const { imgSrc, name, description, price, qty } = itemData;

	const { isLoggedIn } = useContext(LoginContext);

	const handleChange = (e) => {
		setItemData({ ...itemData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isLoggedIn) {
			toast.info("Please Login first");
			navigate("/login");
			return;
		}

		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/item/add`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `token ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(itemData),
			});

			const data = await response.json();

			if (!data.Error) {
				toast.success("Item added successfully:");
			} else {
				toast.error("Error adding item:");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		if (!isLoggedIn) {
			toast.info("Please Login first");
			navigate("/login");
			return;
		}
	}, [isLoggedIn]);

	return (
		<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
			<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
				<h1 className="mb-8 text-3xl text-center">Add Item</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="imgSrc"
						placeholder="Image Url"
						value={imgSrc}
						onChange={handleChange}
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="name"
						placeholder="Name"
						value={name}
						onChange={handleChange}
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="description"
						placeholder="Description"
						value={description}
						onChange={handleChange}
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="price"
						placeholder="Price"
						value={price}
						onChange={handleChange}
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="qty"
						placeholder="Quantity"
						value={qty}
						onChange={handleChange}
					/>

					<button
						type="submit"
						className="w-full text-center py-3 rounded text-white bg-green-400 focus:outline-none my-1"
					>
						Add Item
					</button>
				</form>
			</div>
		</div>
	);
};

export default List;
