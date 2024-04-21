import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, PageError, AboutUs, Contact } from "./pages";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="*" Component={PageError} />
					<Route path="/about-us" Component={AboutUs} />
					<Route path="/contact" Component={Contact} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
