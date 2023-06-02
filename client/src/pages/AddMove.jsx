import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddMove = () => {
	const [move, setMove] = useState({
		move_name: "",
	});
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setMove((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8800/moves", move);
			navigate("/");
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<div className="container w-50">
			<div className="form">
				<h1 className="form-title">Add New Move</h1>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						placeholder="Enter Move Name"
						name="move_name"
						onChange={handleChange}
					/>
					<button
						className="btn btn-primary"
						style={{ marginRight: "20px" }}
						onClick={handleClick}>
						Add
					</button>{" "}
					<Link to="/" className="btn btn-secondary">
						Homepage
					</Link>
				</div>
				{error && (
					<p className="error-message">Something went wrong!</p>
				)}
			</div>
		</div>
	);
};

export default AddMove;
