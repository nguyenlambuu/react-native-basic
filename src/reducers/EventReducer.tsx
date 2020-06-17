import { IEvent } from '../constants/interfaces';
import { ACTION_TYPES } from '../constants/configs';

const initialState: {id: number} = {
  id: -1
};

export const eventReducer = (
  state = initialState,
  action: { type: any, payload: any }
) => {
  switch (action.type) {
    case ACTION_TYPES.SELECT_EVENT:
      return { ...state, id: action.payload }
    default:
      return state;
  }
};
