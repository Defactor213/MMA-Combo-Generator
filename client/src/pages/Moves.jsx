import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Moves = () => {
	const [moves, setMoves] = useState([]);

	useEffect(() => {
		const fetchAllMoves = async () => {
			try {
				const res = await axios.get("http://localhost:8800/moves");
				setMoves(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllMoves();
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:8800/moves/${id}`);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="container">
			<h1>List of Moves</h1>

			<button className="btn btn-primary">
				<Link to="/addmove" className="text-dark">
					Add new move
				</Link>
			</button>

			<div className="moves container" style={{ width: "80%" }}>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Move Name</th>
						</tr>
					</thead>
					<tbody>
						{moves.map((move) => (
							<tr key={move.id}>
								<td>{move.id}</td>
								<td>{move.move_name}</td>
								<td>
									<button
										className="btn btn-secondary"
										onClick={() => handleDelete(move.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Moves;
