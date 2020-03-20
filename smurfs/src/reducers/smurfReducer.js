import {
	FETCHING_SMURFS,
	FETCHING_SMURFS_SUCCESS,
	FETCHING_SMURFS_FAILURE
} from "../actions/getActions";
import {
	POSTING_SMURF,
	POSTING_SMURF_FAILURE,
	POSTING_SMURF_SUCCESS
} from "../actions/postActions";
import {
	DELETE_SMURF,
	DELETE_SMURF_SUCCESS,
	DELETE_SMURF_FAILURE
} from "../actions/deleteActions";

const initialState = {
	isLoading: false,
	error: "",
	smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		// FETCH/GET actions
		case FETCHING_SMURFS:
			return {
				...state,
				isLoading: true,
				error: ""
			};
		case FETCHING_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload
			};
		case FETCHING_SMURFS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		// POST actions
		case POSTING_SMURF:
			return {
				...state,
				isLoading: true,
				error: ""
			};
		case POSTING_SMURF_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload
			};
		case POSTING_SMURF_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		// DELETE actions
		case DELETE_SMURF:
			return {
				...state,
				isLoading: true,
				error: ""
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload
			};
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};
