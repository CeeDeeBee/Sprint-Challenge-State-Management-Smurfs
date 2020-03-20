import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const fetchAction = () => dispatch => {
	dispatch({ type: FETCHING_SMURFS });
	axios
		.get("http://localhost:3333/smurfs")
		.then(res => dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data }))
		.catch(err =>
			dispatch({
				type: FETCHING_SMURFS_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};
