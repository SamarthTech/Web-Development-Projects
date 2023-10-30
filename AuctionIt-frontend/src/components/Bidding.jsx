import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";

const ENDPOINT = process.env.REACT_APP_BACKEND_URL;
var socket;
const Bidding = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [biddingData, setBiddingData] = useState([]);
	const [bidAmount, setBidAmount] = useState(0);

	const { isLoggedIn } = useContext(LoginContext);

	console.log(biddingData);
	let { itemId } = useParams();

	const fetchItemById = async () => {
		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/item/get-one/${itemId}`);
			if (response.ok) {
				const data = await response.json();
				setItem(data.Item);
			} else {
				console.error(
					"Error fetching item:",
					response.status,
					response.statusText,
				);
			}

			setLoading(false);
		} catch (error) {
			console.error("Error:", error);
			setLoading(false);
		}
	};

	const fetchBiddingData = async () => {
		try {
			const local_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(
				`${local_url}/api/bid/getBiddingData/${itemId}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			const data = await response.json();

			if (data.Error) {
				toast.error(data.Message);
			} else {
				toast.success(data.Message);
				setBiddingData(data.BiddingData);
			}
		} catch (error) {
			toast.error(error.message || "An Error Occurred");
			console.error("Error:", error);
		}
	};
	const handleBidPlacement = async () => {
		if (!isLoggedIn) {
			toast.info("Please Login first");
			return;
		}
		try {
			const local_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${local_url}/api/bid/place-bid`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `token ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({ itemId, bidAmount }),
			});

			const data = await response.json();

			if (data.Error) {
				toast.error(data.Message);
				return;
			} else {
				toast.success(data.Message);
				socket.emit("bid-added", data.bid);
				return;
			}
		} catch (error) {
			console.error("Error:", error); // Handle general errors
			return;
		}
	};
	useEffect(() => {
		fetchItemById();
		fetchBiddingData();
	}, [isLoggedIn]);
	useEffect(() => {
		socket = io(ENDPOINT);

		socket.on("newBid", (bid) => {
			console.log("call");
			console.log(bid);
			setBiddingData((prevData) => [...prevData, bid]);
			return;
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (!item) {
		return <p>Item not found</p>;
	}

	return (
		<div className="flex justify-center bg-gray-700 min-h-screen pb-10">
			<div className="max-w-lg text-white mt-5">
				<div className="w-full min-h-[150px]">
					<img
						className="rounded-t-lg w-full h-full object-contain"
						src={item.imgSrc}
						alt=""
					/>
				</div>
				<div className="p-5">
					<h5 className="mb-2 text-2xl font-bold tracking-tight">
						{item.name}
					</h5>

					<p className="mb-3 font-normal ">{item.description}</p>
					<p className="mb-3 font-normal ">₹ {item.price}</p>
					<p className="mb-3 font-normal">Quantity : {item.qty}</p>
				</div>

				<div className="flex justify-between text-white">
					<Link
						to={`/sale`}
						className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-red-400 rounded-xl"
					>
						Cancel
					</Link>

					<div className="text-xl flex  ml-3 bg-green-400 rounded-xl font-semibold">
						<div className="flex  focus-within:text-gray-400 bg-[#f7f9fa] focus-within:bg-white border-2 border-[#f7f9fa] rounded-xl">
							<input
								value={bidAmount}
								onChange={(e) => setBidAmount(e.target.value)}
								className="py-2 text-sm bg-[#f7f9fa] pl-2 lg:pl-4 focus:outline-none focus:bg-white text-gray-900 w-full rounded-md"
								placeholder="Please Enter Amount..."
							/>
							<button
								className="px-5 rounded-xl bg-green-400 text-white"
								onClick={handleBidPlacement}
							>
								Bid
							</button>
						</div>
					</div>
				</div>
				<br />
				<table className="bg-gray-500 table-auto w-full">
					{!biddingData.length && (
						<caption class="caption-bottom bg-gray-500 ">no data found</caption>
					)}
					<thead className="bg-gray-800 text-lg rounded-t ">
						<tr>
							<th scope="col" className="p-2  text-xl float-left">
								User ID
							</th>
							<th scope="col" className="p-2  text-xl ">
								Bid Amt.
							</th>
						</tr>
					</thead>
					<tbody>
						{biddingData.map((item, index) => (
							<tr className="border-b">
								<td className="p-2 ">{item.bidder}</td>
								<td className="p-2 ">₹ {item.bidAmount}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Bidding;
