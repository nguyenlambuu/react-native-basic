import { ACTION_TYPES } from '../constants/configs';

const reset = () => ({
	type: ACTION_TYPES.RESET
})

export const CommonActions = {
	reset
}

export type CommonActionsType = typeof CommonActions;
