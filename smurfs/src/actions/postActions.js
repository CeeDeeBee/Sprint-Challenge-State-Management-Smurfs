import axios from "axios";

export const POSTING_SMURF = "POSTING_SMURF";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE";

export const postAction = smurf => dispatch => {
	dispatch({ type: POSTING_SMURF });
	axios
		.post("http://localhost:3333/smurfs", smurf)
		.then(res => dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data }))
		.catch(err =>
			dispatch({
				type: POSTING_SMURF_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};
