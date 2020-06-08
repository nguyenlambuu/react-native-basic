import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IReduxReducers, IContainerProps} from '../constants/interfaces';
import {Actions} from '../actions';
import {ROUTE_NAME} from '../constants/configs';

class LoginContainer extends Component<IContainerProps> {
  navigation = this.props.navigation;
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Login Container</Text>
        <Button title="Go to Home" onPress={() => {this.navigation.navigate(ROUTE_NAME.HOME)}}/>
        <Button title="Go to Change Password" onPress={() => {this.navigation.navigate(ROUTE_NAME.CHANGE_PASSWORD)}}/>
      </View>
    );
  }
}

const mapStateToProps = (state: IReduxReducers) => {
  return {
    ...state.sessionReducer,
    ...state.commonReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(
      {...Actions.CommonActions },
      dispatch,
    ),
  };
};


export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);