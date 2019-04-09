import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { resetMiddleware } from './core/Utils';
import mainScreen from './components/screens/MainScreen/reducers/mainScreenReducer';

const mergedReducers = { test: mainScreen };

const enableReduxDevTools = composeWithDevTools(applyMiddleware(thunk), resetMiddleware());

const disableReduxDevTools = compose(
  applyMiddleware(thunk),
  resetMiddleware()
);

const store = createStore(
  combineReducers(mergedReducers),
  {},
  __DEV__ ? enableReduxDevTools : disableReduxDevTools
);

export default store;
