import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import AppNavigator from './navigators/AppNavigator';

const App = () => {
  const composeEnhancers = __DEV__ ? composeWithDevTools : compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
// export default from '../storybook';
