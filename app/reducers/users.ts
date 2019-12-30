import { SET_PROFILES } from '../actions/actionTypes';

export const initialState = {
	profiles: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PROFILES: {
			return {
				...state,
				...payload
			};
		}
		default:
			return state;
	}
};
