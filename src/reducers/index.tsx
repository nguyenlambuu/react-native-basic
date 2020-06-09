/**
 * Root Reducer
 * @format
 */
import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { commonReducer } from './common';

const rootReducer = combineReducers(
    {
        commonReducer,
        sessionReducer
    }
);

export default rootReducer;
