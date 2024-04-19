import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PageError } from "./pages";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" Component={Home} />
					<Route path="*" Component={PageError} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
