import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./pages/Loading";

const Notes = lazy(() => import("./pages/NoteTaking"));
const NoPage = lazy(() => import("./pages/NoPage"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/error" element={<NoPage />} />
						<Route path="*" element={<NoPage />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	);
};

export default App;
