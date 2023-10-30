import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const base_url = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(`${base_url}/api/user/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				toast.success(data.Message);
				localStorage.setItem("token", data.token);
				navigate("/sale");
				window.location.reload();
				return;
			} else {
				toast.error(data.Message);
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("An error occurred. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-gray-700 min-h-screen flex flex-col">
			<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
					<h1 className="mb-8 text-3xl text-center">Log in</h1>

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

					<button
						type="submit"
						className={`w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1 ${
							isLoading ? "animate-pulse" : ""
						}`}
						onClick={handleSubmit}
						disabled={isLoading}
					>
						{isLoading ? "Logging in..." : "Log in"}
					</button>
				</div>

				<div className=" text-white mt-6">
					Don't have an account?
					<a
						className="no-underline border-b border-blue text-blue"
						href="/signup"
					>
						Sign up
					</a>
					.
				</div>
			</div>
		</div>
	);
};

export default Login;
