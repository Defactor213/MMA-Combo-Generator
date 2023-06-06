import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Combos = () => {
	const [randomCombo, setRandomCombo] = useState(null);
	const [favoritedCombo, setFavoritedCombo] = useState(null);

	useEffect(() => {
		fetchCombos();
	}, []);

	const fetchCombos = async () => {
		try {
			const res = await axios.get("http://localhost:8800/combos");
			const combosData = res.data;
			const randomIndex = Math.floor(Math.random() * combosData.length);
			const selectedCombo = combosData[randomIndex];
			setRandomCombo(selectedCombo);
		} catch (err) {
			console.log(err);
		}
	};

	const updateFavorites = (comboId) => {
		axios
			.put(`http://localhost:8800/combos/${comboId}`, { id: comboId })
			.then((response) => {
				// Handle success
				console.log("Combo favorites updated successfully");
				setFavoritedCombo(randomCombo);
			})
			.catch((error) => {
				// Handle error
				console.error("Error updating combo favorites:", error);
			});
	};

	const handleNewRandomCombo = () => {
		setRandomCombo(null);
		fetchCombos();
		setFavoritedCombo(null);
	};

	return (
		<div className="container text-center">
			<h1>Random Combos</h1>
			{randomCombo && (
				<div className="combo">
					<h4>Combo ID is {randomCombo.id}</h4>
					<h1>{randomCombo.combo_moves}</h1>
					<button
						className="btn btn-primary"
						onClick={() => updateFavorites(randomCombo.id)}
						disabled={favoritedCombo !== null}>
						{favoritedCombo && favoritedCombo.id === randomCombo.id
							? "Added to Favorites"
							: "Add to Favorites"}
					</button>
				</div>
			)}
			
			<br></br>

			<button
				className="btn btn-secondary"
				onClick={handleNewRandomCombo}
				disabled={randomCombo && favoritedCombo === null}>
				Show Another Random Combo
			</button>
			<br></br>
			<br></br>

			<Link to="/favorites" className="btn btn-secondary">
				View Favorites
			</Link>
		</div>
	);
};

export default Combos;
