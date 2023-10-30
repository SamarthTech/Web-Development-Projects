import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const checkLogin = async () => {
		if (localStorage.token) {
			try {
				const base_url = process.env.REACT_APP_BACKEND_URL;
				const response = await fetch(
					`${base_url}/api/user/getLoggedInUserInfo`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `token ${localStorage.getItem("token")}`,
						},
					},
				);

				const data = await response.json();

				if (response.ok) {
					setIsLoggedIn(data.UserInfo);
				} else setIsLoggedIn(false);
			} catch (error) {
				setIsLoggedIn(false);
				console.error("Error:", error);
			}
		} else {
			setIsLoggedIn(false);
		}
	};
	useEffect(() => {
		checkLogin();
	}, []);

	return (
		<LoginContext.Provider value={{ isLoggedIn }}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContextProvider;
