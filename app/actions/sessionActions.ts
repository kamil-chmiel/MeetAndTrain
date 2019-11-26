import {AsyncStorage} from 'react-native';
import {SET_SESSION, CLOSE_SESSION} from './actionTypes';
import {NavigationActions} from 'react-navigation';

export const setSession = (token, username, name, birthDate) => ({
  type: SET_SESSION,
  payload: {
    token,
    username,
    name,
    birthDate,
  },
});

export const openSession = ({
  token = '',
  username = '',
  name = '',
  birthDate,
}) => dispatch => {
  AsyncStorage.multiSet([
    ['token', token],
    ['username', username],
    ['name', name],
    ['birthDate', birthDate],
  ]).then(() => {
    dispatch(setSession(token, username, name, birthDate));
  });
};

export const login = ({username, password}) => dispatch => {
  //   TODO: API configuration

  const data = {
    token: 'wamkdmakdmawawdawdawda',
    username: 'test',
    name: 'Testowy',
    birthDate: 'date',
  };
  NavigationActions.navigate({
    routeName: 'MainPanel',
  });
  //   dispatch(openSession(data)).then(() => {
  //     dispatch(

  //     );
  //   });
};
