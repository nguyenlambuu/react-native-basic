import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ROUTE_NAME } from '../constants/configs';
import { Actions } from '../actions';
import { IReduxReducers, IContainerProps } from '../constants/interfaces';

import logo from '../assets/images/default_avatar.png';

class SplashContainer extends React.Component<IContainerProps> {

  moveToHome = () => this.props.navigation.navigate(ROUTE_NAME.HOME);

  moveToLogin = () => this.props.navigation.navigate(ROUTE_NAME.LOGIN);

  componentDidMount = () => {
    setTimeout(this.moveToLogin, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DBD73'
  },
  logo: {
    width: 120,
    height: 120
  }
})

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

