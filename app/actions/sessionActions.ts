import { AsyncStorage } from 'react-native';
import { SET_SESSION, CLOSE_SESSION } from './actionTypes';
import Api from '../utils/api';
import NavigationService from '../navigators/NavigationService';

export const setSession = (userId) => ({
	type: SET_SESSION,
	payload: {
		userId
	}
});

export const openSession = (id) => (dispatch) =>
	AsyncStorage.multiSet([ [ 'userId', id ] ]).then(() => {
		dispatch(setSession(id));
	});

export const register = (name, surname, email, password, birthDate, type) => (dispatch) => {
	Api.post('/user', {
		data: {
			Name: name,
			Surname: surname,
			Email: email,
			Password: password,
			BirthDate: birthDate,
			Description: '',
			Type: type,
			Latitude: 0,
			Longitude: 0
		},
		onSuccess: ({ data }) => {
			dispatch(openSession(String(data.userId))).then(() => {
				NavigationService.navigate('MainPanel', {});
			});
		},
		onError: (error) => {
			alert(error);
		}
	});
};

export const login = (email, password) => (dispatch) => {
	Api.post('/login', {
		data: {
			Email: email,
			Password: password
		},
		onSuccess: ({ data }) => {
			dispatch(openSession(String(data.userId))).then(() => {
				NavigationService.navigate('MainPanel', {});
			});
		},
		onError: (error) => {
			alert(error);
		}
	});
};
