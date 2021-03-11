import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FileUpload from "./pages/FileUpload/FileUpload";
import { GoogleMap } from "./pages/Map/GoogleMap";
import * as S from "./styles";

const Camera = lazy(() => import("./pages/Camera/Camera"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<S.Navbar>
					<S.Brand>Lofino</S.Brand>
				</S.Navbar>
				<Header />
				<Switch>
					<Route path="/map">
						<GoogleMap />
					</Route>
					<Route path="/file">
						<FileUpload />
					</Route>
					<Route path="/camera">
						<Camera />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
