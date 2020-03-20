import {
	FETCHING_SMURFS,
	FETCHING_SMURFS_SUCCESS
} from "../actions/getActions";

const initialState = {
	isLoading: false,
	error: "",
	smurfs: []
};

export const getReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};
