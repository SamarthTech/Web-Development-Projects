import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { isLoggedIn } = useContext(LoginContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							>
								<span className="sr-only">Open main menu</span>

								{isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
						{/* Desktop menu items */}
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<Link to="/" className="text-white text-lg">
									AuctionIt
								</Link>
							</div>
							<div className="hidden sm:flex justify-between sm:ml-6 w-full">
								<div className="flex space-x-4">
									{/* Your navigation links */}
									<Link
										to="/"
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Home
									</Link>
									<Link
										to="/sale"
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Sale
									</Link>
									<Link
										to="/list"
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										List
									</Link>

									{/* Add more navigation links as needed */}
								</div>
								<div className="flex space-x-4">
									{isLoggedIn ? (
										<div className="text-white hover:bg-opacity-90  px-3 py-2 bg-red-400 rounded-md text-sm font-medium">
											<h1>{isLoggedIn.name}</h1>
										</div>
									) : (
										<Link
											to="/signup"
											className="text-white hover:bg-opacity-90  px-3 py-2 bg-red-400 rounded-md text-sm font-medium"
										>
											Sign up
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile menu, toggle classes based on menu state */}
				<div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link
							to="/"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Home
						</Link>
						<Link
							to="/sale"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Sale
						</Link>
						<Link
							to="/list"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							List
						</Link>

						{isLoggedIn ? (
							<div className="text-white hover:bg-opacity-90  px-3 py-2 bg-red-400 rounded-md text-sm font-medium">
								<h1>{isLoggedIn.name}</h1>
							</div>
						) : (
							<Link
								to="/signup"
								className="text-white hover:bg-opacity-90  px-3 py-2 bg-red-400 rounded-md text-sm font-medium"
							>
								Sign up
							</Link>
						)}
					</div>
				</div>
			</nav>
			{/* <div className="bg-slate-700 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 font-semibold text-xl	">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/sale" className="text-white">
          Sale
        </Link>
        <Link to="/list" className="text-white">
          List
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <BsSearch className="text-white h-7 w-7 " />
        <input
          type="text"
          placeholder="Search..."
          className="bg-white text-black px-2 py-1 rounded"
        />
      </div>
      <div>
        <img src="/assets/dp.jpg" alt="" className="h-10 w-10 rounded-lg	" />
      </div>
    </div> */}
		</div>
	);
};

export default Navbar;
