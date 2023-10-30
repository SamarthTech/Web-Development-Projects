import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailVerification = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const token = searchParams.get("token");
	const [verificationStatus, setVerificationStatus] = useState(null);

	console.log(token);
	console.log("email");
	useEffect(() => {
		const verifyEmail = async () => {
			try {
				const base_url = process.env.REACT_APP_BACKEND_URL;
				const response = await fetch(
					`${base_url}/api/user/verify-email?token=${token}`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					},
				);

				const data = await response.json();

				if (response.ok) {
					setVerificationStatus(data.Message);
				} else {
					setVerificationStatus(data.Message);
				}
			} catch (error) {
				console.error("Error:", error);
				toast.error("An error occurred. Please try again.");
			}
		};

		if (token) {
			verifyEmail();
		}
	}, [token]);

	return (
		<div className="bg-gray-700 min-h-screen flex flex-col items-center justify-center">
			{verificationStatus ? (
				<h1 className="text-3xl text-white">{verificationStatus}</h1>
			) : (
				<h1 className="text-3xl text-white">Verifying email...</h1>
			)}
		</div>
	);
};

export default EmailVerification;
