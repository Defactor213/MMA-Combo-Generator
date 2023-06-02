import React, { useEffect, useState } from "react";
import axios from "axios";

const Favorites = () => {
	const [favoriteCombos, setFavoriteCombos] = useState([]);

	useEffect(() => {
		fetchFavorites();
	}, []);

	const fetchFavorites = async () => {
		try {
			const res = await axios.get("http://localhost:8800/combos");
			const combosData = res.data;
			const favoriteCombos = combosData.filter(
				(combo) => combo.favorites
			);
			setFavoriteCombos(favoriteCombos);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="container">
			<h1 >Favorite Combos</h1>
			{favoriteCombos.length > 0 ? (
				<table className="table">
					<thead>
						<tr>
							<th>Combo ID</th>
							<th>Combo Moves</th>
						</tr>
					</thead>
					<tbody>
						{favoriteCombos.map((combo) => (
							<tr key={combo.id}>
								<td>{combo.id}</td>
								<td>{combo.combo_moves}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No favorite combos found.</p>
			)}
		</div>
	);
};

export default Favorites;
