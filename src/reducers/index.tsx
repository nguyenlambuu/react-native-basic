import { combineReducers } from 'redux';
import { commonReducer } from './CommonReducer';
import { eventReducer } from './EventReducer';

const rootReducer = combineReducers({
  commonReducer,
  eventReducer
});

export default rootReducer;
