import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { deleteAction } from "../actions/deleteActions";

const SmurfCard = ({ smurf, deleteAction }) => {
	return (
		<div className="smurf-card">
			<FontAwesomeIcon
				className="trash-icon"
				icon={faTrash}
				onClick={() => deleteAction(smurf.id)}
			/>
			<h2>{smurf.name}</h2>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
		</div>
	);
};

export default connect(null, { deleteAction })(SmurfCard);
