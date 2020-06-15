import { ACTION_TYPES } from '../constants/configs'
import { ICommonState } from '../constants/interfaces';

const initialState = {} as ICommonState;

export const commonReducer = (state:ICommonState=initialState,  action: { type: any; payload: any}) => {
	switch (action.type) {
		case ACTION_TYPES.RESET:
			return { ...initialState};
		default:
			return state;
	}
}
