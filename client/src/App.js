import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moves from "./pages/Moves";
import Combos from "./pages/Combos";
import AddMove from "./pages/AddMove";
import Favorite from "./pages/Favorites";
import Workout from "./pages/Workout";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Moves" element={<Moves />} />
					<Route path="/Combos" element={<Combos />} />
					<Route path="/addmove" element={<AddMove />} />
					<Route path="/Favorite" element={<Favorite />} />
					<Route path="/Workout" element={<Workout />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
