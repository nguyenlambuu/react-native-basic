export interface IUser {
  username: string; // saved username when login success
  firstName: string;
  lastName: string;
}

/**
 * Interface for reducers state
 */
export interface ICommonState {};

export interface ISessionState {
  user?: IUser;
}

export interface IReduxReducers {
  commonReducer?: ICommonState;
  sessionReducer?: ISessionState;
}

/**
 * Container props
 */
export interface IContainerProps extends ICommonState, ISessionState {
	navigation?: any,
	actions?: any
}


