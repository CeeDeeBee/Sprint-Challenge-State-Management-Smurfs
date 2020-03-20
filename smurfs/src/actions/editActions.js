import axios from "axios";

export const EDIT_SMURF = "EDIT_SMURF";
export const PUT_SMURF = "PUT_SMURF";
export const PUT_SMURF_SUCCESS = "PUT_SMURF_SUCCESS";
export const PUT_SMURF_FAILURE = "PUT_SMURF_FAILURE";

export const setEditAction = smurf => dispatch => {
	dispatch({ type: EDIT_SMURF, payload: smurf });
};

export const putAction = (smurf, id) => dispatch => {
	dispatch({ type: PUT_SMURF });
	axios
		.put(`http://localhost:3333/smurfs/${id}`, smurf)
		.then(res => dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data }))
		.catch(err =>
			dispatch({
				type: PUT_SMURF_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};
