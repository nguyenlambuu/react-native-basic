import { ACTION_TYPES } from '../constants/configs';
import { IUser } from '../constants/interfaces';

const updateUser = (payload:IUser) => ({
    type: ACTION_TYPES.UPDATE_USER,
    payload
})

export const SessionActions = {
    updateUser
}

export type SessionActionsType = typeof SessionActions;
