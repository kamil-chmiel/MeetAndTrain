import { SET_PROFILES } from '../actions/actionTypes';
import Api from '../utils/api';

export const setProfiles = (profiles) => ({
	type: SET_PROFILES,
	payload: {
		profiles
	}
});

export const getProfiles = (userId) => (dispatch) => {
	return Api.get(`/partners/${userId}/${18}/${100}/${1}/${100}`, {
		onSuccess: (response) => {
			const { partners } = response.data;
			console.log(partners);
			dispatch(setProfiles(partners));
		},
		onError: (error) => {}
	});
};

export const sendResult = (userId, partnerId, decision) => (dispatch) => {
	console.log(userId);
	return Api.post(`/result`, {
		UserID: Number(userId),
		PartnerID: partnerId,
		Decision: decision,
		onSuccess: (response) => {
			console.log(response.data);
		},
		onError: (error) => {}
	});
};
