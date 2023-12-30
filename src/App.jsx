import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorCompra from "./Components/ErrorCompra/ErrorCompra";
import CompraCompletada from "./Components/CompraCompletada/CompraCompletada";
import Header from "./Components/header/Header";
import "./app.scss";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/cancel" element={<ErrorCompra />} />
				<Route path="/Completed" element={<CompraCompletada />} />
			</Routes>
		</Router>
	);
}

export default App;
