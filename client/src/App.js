import { BrowserRouter, Routes, Route } from "react-router-dom";
import Moves from "./pages/Moves";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Moves />} />	
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
