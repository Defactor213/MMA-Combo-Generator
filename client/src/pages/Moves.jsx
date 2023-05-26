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
				{moves.map((move) => (
					<div key={move.ID} className="move">
                        <h5>Move ID is {move.ID} </h5>
						<p>{move.Name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Moves;