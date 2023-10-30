import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		confirm_password: "",
	});

	const { fullname, email, password, confirm_password } = formData;
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true); // Set loading state to true

		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/user/signup`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: fullname, email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success(data.Message);
				setIsLoading(false);
			} else {
				toast.error(data.Message);
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("An error occurred. Please try again.");
		} finally {
			setIsLoading(false); // Set loading state back to false
		}
	};

	return (
		<div className="bg-gray-700 min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
					<h1 className="mb-8 text-3xl text-center">Sign up</h1>
					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="fullname"
						placeholder="Full Name"
						value={fullname}
						onChange={handleChange}
					/>

					<input
						type="text"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="email"
						placeholder="Email"
						value={email}
						onChange={handleChange}
					/>

					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="password"
						placeholder="Password"
						value={password}
						onChange={handleChange}
					/>
					<input
						type="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
						name="confirm_password"
						placeholder="Confirm Password"
						value={confirm_password}
						onChange={handleChange}
					/>

					<button
						type="submit"
						className={`w-full text-center py-3 rounded text-white bg-green-400 focus:outline-none my-1 ${
							isLoading ? "animate-pulse opacity-50 cursor-not-allowed" : ""
						}`}
						onClick={handleSubmit}
						disabled={isLoading} // Disable the button when loading
					>
						{isLoading ? "Creating Account..." : "Create Account"}
					</button>
				</div>

				<div className="text-white mt-6">
					Already have an account?
					<a
						className="no-underline border-b border-blue text-blue"
						href="/login"
					>
						Log in
					</a>
					.
				</div>
			</div>
		</div>
	);
};

export default Signup;
