import { SET_PROFILES } from '../actions/actionTypes';
import Api from '../utils/api';

export const setProfiles = (profiles) => ({
	type: SET_PROFILES,
	payload: {
		profiles
	}
});

export const getProfiles = () => (dispatch) => {
	return Api.get(`/partners/${0}/${18}/${100}/${1}/${100}`, {
		onSuccess: (response) => {
			const { partners } = response.data;
			console.log(partners);
			dispatch(setProfiles(partners));
		},
		onError: (error) => {}
	});
};
