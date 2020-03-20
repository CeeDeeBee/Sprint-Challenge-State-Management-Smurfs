import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAction } from "../actions/getActions";

import SmurfCard from "./SmurfCard";

const SmurfsList = ({ isLoading, error, smurfs, fetchAction }) => {
	useEffect(() => {
		fetchAction();
	}, []);

	return (
		<div className="smurfs-list">
			{smurfs.map(smurf => (
				<SmurfCard smurf={smurf} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		error: state.error,
		smurfs: state.smurfs
	};
};

export default connect(mapStateToProps, { fetchAction })(SmurfsList);
