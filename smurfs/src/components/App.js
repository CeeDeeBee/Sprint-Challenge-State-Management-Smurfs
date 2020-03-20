import React from "react";
import { Route, Link } from "react-router-dom";

import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";
import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div className="links">
				<Link to="/">Smurfs</Link>
				<Link to="/form">Add Smurf</Link>
			</div>
			<Route exact path="/">
				<SmurfsList />
			</Route>
			<Route path="/form">
				<SmurfForm />
			</Route>
		</div>
	);
};

export default App;
