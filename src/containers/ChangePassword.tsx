import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IReduxReducers, IContainerProps } from '../constants/interfaces';
import { Actions } from '../actions';
import { BtnPrimary } from '../components/Button';
import { COLORS, SPACES } from '../constants/styles';

class ChangePasswordContainer extends Component<IContainerProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Input
            placeholder='Old Password'
            placeholderTextColor={COLORS.DARK}
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder='New Password'
            placeholderTextColor={COLORS.DARK}
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder='Confirm Password'
            placeholderTextColor={COLORS.DARK}
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={styles.inputContainer}
          />
          <BtnPrimary text="Submit" touch={() => console.log('Submited!')} />
        </View>
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
      { ...Actions.CommonActions },
      dispatch,
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.SECONDARY,
    paddingTop: 50,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: SPACES.LG,
    marginBottom: 72
  },
  input: {
    color: COLORS.DARK
  },
  inputContainer: {
    borderColor: COLORS.DARK
  }
});

export const ChangePassword = connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);