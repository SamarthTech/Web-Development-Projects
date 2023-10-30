import React from "react";

const Home = () => {
	return (
		<div className="h-screen flex justify-center items-center bg-gray-900">
			<section className="bg-white dark:bg-gray-900 ">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
					<a
						href="/sale"
						className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
						role="alert"
					>
						<span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
							New
						</span>{" "}
						<span className="text-sm font-medium">Check new items</span>
						<svg
							className="ml-2 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						We invest in the world’s potential
					</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
						minima, voluptates veritatis error magnam ratione amet quos eum vero
						magni impedit, incidunt dolorem? Iusto assumenda autem ipsam magni
						dicta maiores.
					</p>
					<div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<a
							href="/sale"
							className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700"
						>
							Learn more
							<svg
								className="ml-2 -mr-1 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
