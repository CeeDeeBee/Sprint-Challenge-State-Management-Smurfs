import React, { useState } from "react";
import { connect } from "react-redux";

import { postAction } from "../actions/postActions";

const SmurfForm = ({ postAction }) => {
	const [inputValues, setInputValues] = useState({
		name: "",
		age: "",
		height: ""
	});

	const handleChange = e => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		postAction(inputValues);
		setInputValues({
			name: "",
			age: "",
			height: ""
		});
	};

	return (
		<div className="smurf-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={inputValues.name}
					onChange={handleChange}
					placeholder="Name"
				/>
				<input
					type="text"
					name="age"
					value={inputValues.age}
					onChange={handleChange}
					placeholder="Age"
				/>
				<input
					type="text"
					name="height"
					value={inputValues.height}
					onChange={handleChange}
					placeholder="Height"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default connect(null, { postAction })(SmurfForm);
