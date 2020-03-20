import React from "react";

const SmurfCard = ({ smurf }) => {
	return (
		<div className="smurf-card">
			<h2>{smurf.name}</h2>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
		</div>
	);
};

export default SmurfCard;
