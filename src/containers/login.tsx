import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IReduxReducers, IContainerProps } from "../constants/interfaces";
import { Actions } from "../actions";
import { ROUTE_NAME } from '../constants/configs';
import { Header } from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome';

import logo from '../assets/images/logo.png';

const { width: WIDTH } = Dimensions.get('window');

class LoginContainer extends Component<IContainerProps> {

  state = {
    username: '',
    password: ''
  }

  componentDidMount = () => { }

  componentWillUnmount = () => { }

  onUsernameTextChange = (username: string) => {
    this.setState({ username })
  }

  onPasswordTextChange = (password: string) => {
    this.setState({ password })
  }


  login = () => { console.log('success'); this.props.navigation.navigate(ROUTE_NAME.HOME) }

  render() {
    const { username, password } = this.state;

    return (
        <View style={styles.container}>
          <Header />
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon name="user" size={24} color="#000" style={styles.inputIcon} />
              <TextInput
                value={username}
                onChangeText={this.onUsernameTextChange}
                placeholder={'Username'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                underlineColorAndroid='transparent'
                style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
            <Icon name="lock" size={24} color="#000" style={styles.inputIcon} />
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={this.onPasswordTextChange}
                placeholder={'Password'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                style={styles.input} />
            </View>

            <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
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
    backgroundColor: '#E5F3E9'
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
    borderColor: '#000000',
    borderRadius: 48,
    paddingLeft: 48,
    marginHorizontal: 48,
    marginBottom: 16,
    fontSize: 16,
  },
  inputIcon: {
    position: 'absolute',
    top: 12,
    left: 72,
    zIndex: 2
  },
  btnLogin: {
    width: WIDTH - 216,
    height: 48,
    borderRadius: 8,
    marginTop: 48,
    backgroundColor: '#4DBD73',
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state: IReduxReducers) => {
  return state.commonReducer;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({ ...Actions.CommonActions, ...Actions.SessionActions }, dispatch)
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

