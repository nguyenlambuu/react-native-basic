import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import rootReducer from './reducers/index';

const epicMiddleware = createEpicMiddleware();

const rootStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(epicMiddleware));
};

export default rootStore;
