import React, { useEffect, useState } from "react";
import Card from "./Card";
import BuyNowModal from "./BuyNowModal";

const Sale = () => {
	const [buyNowModal, setBuyNowModal] = useState(false);
	const [auctionItem, setAuctionItem] = useState();

	console.log("buyNowModal", buyNowModal);
	const fetchItems = async () => {
		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/item/get-all`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			if (response.ok) {
				setAuctionItem(data.Items);
			} else {
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	useEffect(() => {
		fetchItems();
	}, []);

	return !auctionItem ? (
		<>
			<div className="flex justify-center mt-5">
				<h1 className="text-slate-900 text-3xl font-mono font-bold">Items</h1>
			</div>

			<div className="mt-3 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
					<div class="rounded-lg bg-slate-200 h-36 w-full"></div>
					<div class="animate-pulse flex space-x-4">
						<div class="flex-1 space-y-6 py-1">
							<div class="space-y-3 mt-3">
								<div class="h-5 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
							</div>
							<div className="flex justify-between">
								<div class="h-10 w-20 bg-slate-200 rounded"></div>
								<div class="h-10 w-20 bg-slate-200 rounded float-right"></div>
							</div>
						</div>
					</div>
				</div>
				<div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
					<div class="rounded-lg bg-slate-200 h-36 w-full"></div>
					<div class="animate-pulse flex space-x-4">
						<div class="flex-1 space-y-6 py-1">
							<div class="space-y-3 mt-3">
								<div class="h-5 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
							</div>
							<div className="flex justify-between">
								<div class="h-10 w-20 bg-slate-200 rounded"></div>
								<div class="h-10 w-20 bg-slate-200 rounded float-right"></div>
							</div>
						</div>
					</div>
				</div>
				<div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
					<div class="rounded-lg bg-slate-200 h-36 w-full"></div>
					<div class="animate-pulse flex space-x-4">
						<div class="flex-1 space-y-6 py-1">
							<div class="space-y-3 mt-3">
								<div class="h-5 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
							</div>
							<div className="flex justify-between">
								<div class="h-10 w-20 bg-slate-200 rounded"></div>
								<div class="h-10 w-20 bg-slate-200 rounded float-right"></div>
							</div>
						</div>
					</div>
				</div>
				<div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
					<div class="rounded-lg bg-slate-200 h-36 w-full"></div>
					<div class="animate-pulse flex space-x-4">
						<div class="flex-1 space-y-6 py-1">
							<div class="space-y-3 mt-3">
								<div class="h-5 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
								<div class="h-3 bg-slate-200 rounded "></div>
							</div>
							<div className="flex justify-between">
								<div class="h-10 w-20 bg-slate-200 rounded"></div>
								<div class="h-10 w-20 bg-slate-200 rounded float-right"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	) : (
		<>
			<div className="flex justify-center mt-5">
				<h1 className="text-slate-900 text-3xl font-mono font-bold">Items</h1>
			</div>
			<div className="mt-3 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{auctionItem.map((item) => (
					<Card
						key={item._id}
						itemId={item._id}
						name={item.name}
						description={item.description}
						image={item.imgSrc}
						price={item.price}
						setBuyNowModal={setBuyNowModal}
						qty={item.qty}
					/>
				))}
			</div>
			{buyNowModal && (
				<BuyNowModal
					buyNowModal={buyNowModal}
					setBuyNowModal={setBuyNowModal}
				/>
			)}
		</>
	);
};

export default Sale;
