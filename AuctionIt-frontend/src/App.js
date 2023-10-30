// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sale from "./components/Sale";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import EmailVerification from "./components/EmailVerification";
import LoginContextProvider from "./context/LoginContext";
import Bidding from "./components/Bidding";

function App() {
	return (
		<LoginContextProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sale" element={<Sale />} />
					<Route path="/list" element={<List />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/verify-email" element={<EmailVerification />} />
					<Route path="/bidding/:itemId" element={<Bidding />} />
				</Routes>
				<ToastContainer
					position="bottom-left"
					autoClose={5000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</BrowserRouter>
		</LoginContextProvider>
	);
}

export default App;
