import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image, Dimensions, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import request from '../api/request';
import { BtnPrimary } from '../components/Button';
import { IReduxReducers, IContainerProps, ILoginDto } from "../constants/interfaces";
import { ROUTE_NAME } from '../constants/configs';
import { API_CONSTANTS } from '../constants/endpoint';
import { utils } from '../constants/utils';
import { STRINGS_EN } from '../constants/strings';
import { COLORS, FONT_SIZES } from '../constants/styles';

const { width: WIDTH } = Dimensions.get('window');

class LoginContainer extends Component<IContainerProps> {

  state = {
    username: '',
    password: '',
    errorMsg: ''
  }

  componentDidMount = () => { }

  componentWillUnmount = () => { }

  onUsernameTextChange = (username: string) => {
    this.setState({ username })
  }

  onPasswordTextChange = (password: string) => {
    this.setState({ password })
  }

  login = async (user: ILoginDto) => {
    console.log(user);
    if (utils.isBlank(user.username) || utils.isBlank(user.password)) {
      this.setState({ errorMsg: STRINGS_EN.MESSAGES.EMPTY_FIELDS });
      return;
    }

    try {
      const token = await (await request.post(API_CONSTANTS.USERS, user)).data.token;
      if (!token) {
        return;
      }

      await AsyncStorage.setItem(STRINGS_EN.STORAGES.TOKEN, token);
      console.log('GET TOKEN', await AsyncStorage.getItem(STRINGS_EN.STORAGES.TOKEN));
      this.props.navigation.navigate(ROUTE_NAME.HOME)

    } catch (error) {
      this.setState({ errorMsg: error.message });
    }
  }

  render() {
    const { username, password, errorMsg } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Icon name="user" size={24} color={COLORS.DARK} style={styles.inputIcon} />
            <TextInput
              value={username}
              onChangeText={this.onUsernameTextChange}
              placeholder={'Username'}
              placeholderTextColor={'rgba(0,0,0,0.5)'}
              underlineColorAndroid='transparent'
              style={styles.input} />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={24} color={COLORS.DARK} style={styles.inputIcon} />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={this.onPasswordTextChange}
              placeholder={'Password'}
              placeholderTextColor={'rgba(0,0,0,0.5)'}
              style={styles.input} />
          </View>
          {errorMsg ? <Text style={{ color: COLORS.RED }}>{errorMsg}</Text> : null}

          <BtnPrimary text="Login" touch={() => this.login({username, password})} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IReduxReducers) => {
  return state.commonReducer;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: WIDTH - 80,
    height: 200,
    resizeMode: 'contain'
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 80,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.DARK,
    borderRadius: 48,
    paddingLeft: 48,
    marginHorizontal: 48,
    marginBottom: 16,
    fontSize: FONT_SIZES.MD,
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 72,
    zIndex: 2
  }
});

export const Login = connect(mapStateToProps)(LoginContainer)

