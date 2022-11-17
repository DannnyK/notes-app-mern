import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/NoteTaking";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/error" element={<NoPage />} />
						<Route path="*" element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
