import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { eventReducer } from './event';

const rootReducer = combineReducers({
  commonReducer,
  eventReducer
});

export default rootReducer;
