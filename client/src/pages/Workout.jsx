import React, { useState } from "react";
import "./styles.css";

// to do list:
// make basic count down timer function
// edit function so that sets, work and rest time works
// ensure single combo can select from favorites 
// make a function that will randomly select a combo from the list
// make sure entire timer works
// add sound
// 

const Workout = () => {
	const [sets, setSets] = useState(3);
	const [workoutTime, setWorkoutTime] = useState(60);
	const [restTime, setRestTime] = useState(30);
	const [mode, setMode] = useState("random"); // Default mode is 'single'
	const [comboType, setComboType] = useState(""); // Default combo type is empty

	const handleSetsChange = (event) => {
		setSets(parseInt(event.target.value));
	};

	const handleWorkoutTimeChange = (event) => {
		setWorkoutTime(parseInt(event.target.value));
	};

	const handleRestTimeChange = (event) => {
		setRestTime(parseInt(event.target.value));
	};

	const handleSetsIncrement = () => {
		setSets((prevSets) => prevSets + 1);
	};

	const handleSetsDecrement = () => {
		if (sets > 0) {
			setSets((prevSets) => prevSets - 1);
		}
	};

	const handleWorkoutTimeIncrement = () => {
		setWorkoutTime((prevTime) => prevTime + 1);
	};

	const handleWorkoutTimeDecrement = () => {
		if (workoutTime > 0) {
			setWorkoutTime((prevTime) => prevTime - 1);
		}
	};

	const handleRestTimeIncrement = () => {
		setRestTime((prevTime) => prevTime + 1);
	};

	const handleRestTimeDecrement = () => {
		if (restTime > 0) {
			setRestTime((prevTime) => prevTime - 1);
		}
	};

	const handleModeChange = (e) => {
		setMode(e.target.value);
	};

	const handleComboTypeChange = (e) => {
		setComboType(e.target.value);
	};

	const startTimer = () => {
		// Timer logic based on the selected mode and combo type
		if (mode === "single") {
			if (comboType === "") {
				console.log("Please select a combo type.");
				return;
			}
			console.log(`Single combo mode - Combo Type: ${comboType}`);
		} else if (mode === "random") {
			console.log("Random mode");
		}
	};

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center vh-100">
			<h1>Workout</h1>
			<div className="form-group text-center">
				<label htmlFor="sets"><h5>Number of Sets:</h5></label>
				<div className="input-group">
					<div className="input-group-prepend">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleSetsDecrement}>
							-
						</button>
					</div>
					<input
						type="number"
						id="sets"
						value={sets}
						onChange={handleSetsChange}
						className="form-control form-control-lg"
					/>
					<div className="input-group-append">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleSetsIncrement}>
							+
						</button>
					</div>
				</div>
			</div>
			<div className="form-group text-center">
				<label htmlFor="workoutTime"><h5>Workout Time</h5> <h7>(seconds):</h7></label>
				<div className="input-group">
					<div className="input-group-prepend">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleWorkoutTimeDecrement}>
							-
						</button>
					</div>
					<input
						type="number"
						id="workoutTime"
						value={workoutTime}
						onChange={handleWorkoutTimeChange}
						className="form-control form-control-lg"
					/>
					<div className="input-group-append">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleWorkoutTimeIncrement}>
							+
						</button>
					</div>
				</div>
			</div>
			<div className="form-group text-center">
				<label htmlFor="restTime"><h5>Rest Time</h5> <h7>(seconds):</h7></label>
				<div className="input-group">
					<div className="input-group-prepend">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleRestTimeDecrement}>
							-
						</button>
					</div>
					<input
						type="number"
						id="restTime"
						value={restTime}
						onChange={handleRestTimeChange}
						className="form-control form-control-lg"
					/>
					<div className="input-group-append">
						<button
							className="btn btn-secondary btn-large square-button"
							onClick={handleRestTimeIncrement}>
							+
						</button>
					</div>
				</div>
			</div>

			<br></br>
			<div className="form-group text-center">
				<h2>Modifiers</h2>
				<div className="form-check">
					<input
						type="radio"
						id="randomMode"
						name="mode"
						value="random"
						checked={mode === "random"}
						onChange={handleModeChange}
						className="form-check-input"
					/>
					<label htmlFor="randomMode" className="form-check-label">
						Random
					</label>
				</div>
				<div className="form-check">
					<input
						type="radio"
						id="singleComboMode"
						name="mode"
						value="single"
						checked={mode === "single"}
						onChange={handleModeChange}
						className="form-check-input"
					/>
					<label
						htmlFor="singleComboMode"
						className="form-check-label">
						Single Combo
					</label>
				</div>
				{mode === "single" && (
					<div
						className="form-group text-center"
						style={{ marginTop: "10px" }}>
						<label htmlFor="comboType">Combo Type:</label>
						<select
							id="comboType"
							value={comboType}
							onChange={handleComboTypeChange}
							className="form-control">
							<option value="">Select Combo Type</option>
							<option value="Combo 1">Jab Cross</option>
							<option value="Combo 2">Uppercut hook cross</option>
							<option value="Combo 3">left kick right knee</option>
						</select>
					</div>
				)}
			</div>

			<br></br>

			<button className="btn btn-primary btn-lg" onClick={startTimer}>
				Start
			</button>
		</div>
	);
};

export default Workout;
