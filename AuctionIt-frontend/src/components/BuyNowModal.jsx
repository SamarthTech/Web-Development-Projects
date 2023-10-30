import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/LoginContext";

const BuyNowModal = ({ buyNowModal, setBuyNowModal }) => {
	const { isLoggedIn } = useContext(LoginContext);

	const handleClick = async () => {
		if (!isLoggedIn) {
			toast.info("Please Login first");
			return;
		}
		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;

			const response = await fetch(`${base_url}/api/item/buy/${buyNowModal}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `token ${localStorage.getItem("token")}`,
				},
			});

			const data = await response.json();

			if (response.ok) {
				toast.success(data.Message);
				setBuyNowModal(false);
			}
			console.log("Response:", data);
		} catch (error) {
			toast.error(error);
			console.error("Error:", error);
		}
	};
	return (
		<div>
			<div className=" min-w-screen overflow-y-auto  p-1 md::p-0 animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none  bg-center bg-cover">
				<div
					className="fixed bg-darkBackgroundPrimary  h-full opacity-80 inset-0 z-0"
					onClick={() => setBuyNowModal(false)}
				></div>
				<div className="w-full lg:w-auto text-white mx-4 auto p-10 max-w-md relative  my-auto rounded-xl shadow-lg bg-black">
					<div className="text-3xl text-red-400">
						Are You Sure Want to buy this item?
					</div>
					<br />
					<br />
					<div className="flex justify-between text-white">
						<button
							className="text-xl px-5 py-2 bg-red-400 rounded-xl font-semibold"
							onClick={() => setBuyNowModal(false)}
						>
							Cancel
						</button>
						<button
							className="text-xl px-5 py-2 bg-green-400 rounded-xl font-semibold"
							onClick={handleClick}
						>
							YES
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyNowModal;
