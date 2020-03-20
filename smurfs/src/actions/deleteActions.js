import axios from "axios";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteAction = smurfId => dispatch => {
	dispatch({ type: DELETE_SMURF });
	axios
		.delete(`http://localhost:3333/smurfs/${smurfId}`)
		.then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
		.catch(err =>
			dispatch({
				type: DELETE_SMURF_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};
