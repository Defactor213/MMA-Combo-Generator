import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
	return (
		<div className="container text-center">
			<h1 className="mt-5">MMA Combo Generator</h1>
			<h2 className="mt-4">
				<a href="/moves" className="text-decoration-none">
					Moves list
				</a>
			</h2>
			<h2 className="mt-4">
				<a href="/combos" className="text-decoration-none">
					Combos list
				</a>
			</h2>
			<h2 className="mt-4">
				<a href="/Favorite" className="text-decoration-none">
					Favorites
				</a>
			</h2>
		</div>
	);
};

export default Homepage;
