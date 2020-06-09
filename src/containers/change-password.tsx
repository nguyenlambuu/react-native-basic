import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'react-native-elements';

import { IReduxReducers, IContainerProps } from '../constants/interfaces';
import { Actions } from '../actions';
import { BtnPrimary } from '../components/button';

class ChangePasswordContainer extends Component<IContainerProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholder='Old Password'
            placeholderTextColor="#000"
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder='New Password'
            placeholderTextColor="#000"
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder='Confirm Password'
            placeholderTextColor="#000"
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={styles.inputContainer}
          />
          <BtnPrimary text="Submit" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CDE4D3',
    paddingTop: 50,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: 32,
    marginBottom: 72
  },
  input: {
    color: '#000000'
  },
  inputContainer: {
    borderColor: '#000000'
  }
});

const mapStateToProps = (state: IReduxReducers) => {
  return {
    ...state.sessionReducer,
    ...state.commonReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(
      { ...Actions.CommonActions },
      dispatch,
    ),
  };
};


export const ChangePassword = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);