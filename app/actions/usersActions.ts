import {SET_PROFILES} from '../actions/actionTypes';
import Api from '../utils/api';
import NavigationService from '../navigators/NavigationService';

export const setProfiles = profiles => ({
  type: SET_PROFILES,
  payload: {
    profiles,
  },
});

export const getProfiles = userId => dispatch => {
  return Api.get(`/partners/${userId}/${18}/${100}/${1}/${100}`, {
    onSuccess: response => {
      const {partners} = response.data;
      console.log(partners);
      dispatch(setProfiles(partners));
    },
    onError: error => {},
  });
};

export const sendResult = (userId, profile, decision) => dispatch => {
  console.log(profile);
  return Api.post(`/result`, {
    UserID: Number(userId),
    PartnerID: profile.id,
    Decision: decision,
    onSuccess: response => {
      if (response.data.matched === 1) {
        NavigationService.navigate('MatchScreen', {profile});
      }
    },
    onError: error => {},
  });
};
