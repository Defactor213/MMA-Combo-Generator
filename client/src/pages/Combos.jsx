import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Combos = () => {
	const [combos, setCombos] = useState([]);

	useEffect(() => {
		const fetchAllCombos = async () => {
			try {
				const res = await axios.get("http://localhost:8800/combos");
				setCombos(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllCombos();
	}, []);

	console.log(combos);

	return (
		<div>
			<h1>List of Combos</h1>
			<div className="combos">
				{combos.map((combo) => (
					<div key={combo.id} className="combo">
						<h5>Combo ID is {combo.id} </h5>
						<p>{combo.combo_moves}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Combos;
