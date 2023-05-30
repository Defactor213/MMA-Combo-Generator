import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Moves from "./pages/Moves";
import Combos from "./pages/Combos";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/Moves" element={<Moves />} />
					<Route path="/Combos" element={<Combos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
