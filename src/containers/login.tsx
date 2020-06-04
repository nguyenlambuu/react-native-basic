import React, { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IReduxReducers, IContainerProps } from "../constants/interfaces";
import { Actions } from "../actions";

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


  login = () => { }

  render() {
    const { username, password } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is login screen</Text>
        <TextInput
          value={username}
          onChangeText={this.onUsernameTextChange}
          placeholder={'Username'} />
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={this.onPasswordTextChange}
          placeholder={'Password'} />
        <Button title={'Login'} onPress={this.login} color={'blue'} />
      </View>
    );
  }
}

const mapStateToProps = (state: IReduxReducers) => {
  return state.commonReducer;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({ ...Actions.CommonActions, ...Actions.SessionActions }, dispatch)
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

