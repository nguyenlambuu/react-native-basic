export interface ILoginDto {
	username: string,
	password: string
}

export interface IUser {
	username: string, // saved username when login success
	firstName: string,
	lastName: string
}

export interface IEvent {
  id: number,
  camera: string,
  date: string,
  violationType: string,
	status: string,
	licensePlate: string
}

/**
 * Interface for reducers state
 */
export interface ICommonState {}

export interface ISessionState {
	user?: IUser
}

export interface IEventState {
	event?:IEvent
}

export interface IReduxReducers {
	commonReducer?:ICommonState,
	sessionReducer?:ISessionState
	eventReducer?:IEventState
}
//************************************************************/

/**
 * Container props
 */
export interface IContainerProps extends ICommonState, ISessionState, IEventState {
	navigation?: any,
	actions?: any
}