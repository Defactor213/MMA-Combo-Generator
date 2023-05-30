import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

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

	console.log(moves);

	return (
		<div>
			<h1>List of Moves</h1>
			<div className="moves">
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
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Moves;