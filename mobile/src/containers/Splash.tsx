import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IReduxReducers, IContainerProps} from '../constants/interfaces';
import {Actions} from '../actions';
import {ROUTE_NAME} from '../constants/configs';

class SplashContainer extends Component<IContainerProps> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Splash Container</Text>
        <Button title="Go to Login" onPress={() => {this.props.navigation.navigate(ROUTE_NAME.LOGIN)}}/>
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


export const Splash = connect(mapStateToProps, mapDispatchToProps)(SplashContainer);