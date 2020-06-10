import { ACTION_TYPES } from '../constants/configs'
import { IUser, ISessionState } from '../constants/interfaces';

const initialState = {
    user: {} as IUser
} as ISessionState;

export const sessionReducer = (state:ISessionState=initialState,  action: { type: any; payload: IUser }) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_USER:
            return { ...state, user: action.payload };
        case ACTION_TYPES.RESET:
            return initialState;
        default:
            return state;
    }
}
