import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import { deleteAction } from "../actions/deleteActions";
import { setEditAction } from "../actions/editActions";

const SmurfCard = ({ smurf, deleteAction, setEditAction }) => {
	return (
		<div className="smurf-card">
			<FontAwesomeIcon
				className="trash-icon"
				icon={faTrash}
				onClick={() => deleteAction(smurf.id)}
			/>
			<Link to="/form">
				<FontAwesomeIcon
					className="pencil-icon"
					icon={faPen}
					onClick={() => setEditAction(smurf)}
				/>
			</Link>
			<h2>{smurf.name}</h2>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
		</div>
	);
};

export default connect(null, { deleteAction, setEditAction })(SmurfCard);
