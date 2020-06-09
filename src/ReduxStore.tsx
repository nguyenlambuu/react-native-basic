/**
 * Application Store
 * Created with redux-observable
 * Do not change
 * To add epic to store
 * use: import rootEpic from './epics/index';
 * and add epicMiddleware.run(rootEpic); before return store
 */

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers/index';

const epicMiddleware = createEpicMiddleware();

const rootStore = () => {
	return createStore(
		rootReducer,
		{},
		applyMiddleware(epicMiddleware)
	);
}

export default rootStore;
