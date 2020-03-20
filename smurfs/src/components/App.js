import React from "react";
import { Route, Link } from "react-router-dom";

import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<Link to="/">Smurfs</Link>
			<Link to="/add">Add Smurf</Link>
			<Route exact path="/">
				<SmurfsList />
			</Route>
			<Route path="/add">
				<SmurfForm />
			</Route>
		</div>
	);
};

export default App;
