import { SET_SESSION } from '../actions/actionTypes';

export const initialState = {
	userId: 0,
	name: '',
	surname: '',
	email: '',
	description: '',
	birthDate: '',
	gender: 0
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SESSION: {
			return {
				...state,
				...payload
			};
		}
		default:
			return state;
	}
};
