
import { IEvent } from '../constants/interfaces';
import { ACTION_TYPES } from '../constants/configs';

export const selectEvent = (payload:IEvent) => ({
  type: ACTION_TYPES.SELECT_EVENT,
  payload
});

export const EventActions = {
  selectEvent,
};

export type EventActionsType = typeof EventActions;