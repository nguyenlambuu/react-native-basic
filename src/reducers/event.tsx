import { IEvent } from '../constants/interfaces';
import { ACTION_TYPES } from '../constants/configs';

const initialState = {
  event: {} as IEvent
};

export const eventReducer = (
  state = initialState,
  action: { type: any, payload: any }
) => {
  switch (action.type) {
    case ACTION_TYPES.SELECT_EVENT:
      return { ...state, event:action.payload }
    default:
      return state;
  }
};
