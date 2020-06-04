import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ROUTE_NAME } from '../constants/configs';
import { Actions } from '../actions';
import { IReduxReducers, IContainerProps } from '../constants/interfaces';

class SplashContainer extends React.Component<IContainerProps> {

  moveToHome = () => this.props.navigation.navigate(ROUTE_NAME.HOME);

  moveToLogin = () => this.props.navigation.navigate(ROUTE_NAME.LOGIN);

  componentDidMount = () => {
    setTimeout(this.moveToLogin, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>This is splash screen!</Text>
      </View>
    );
  }
}
const mapStateToProps = (state: IReduxReducers) => {
  return {
    ...state.commonReducer,
    ...state.sessionReducer
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({ ...Actions.CommonActions, ...Actions.SessionActions }, dispatch)
  }
}

export const Splash = connect(mapStateToProps, mapDispatchToProps)(SplashContainer)

