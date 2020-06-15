import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { COLORS } from '../constants/styles';


export const BtnPrimary = ({ touch, text }: any) => {

  const onUserTouch = () => {
    touch();
  }

  return (
    <TouchableOpacity onPress={onUserTouch} style={[styles.btn, styles.btnPrimary]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

export const BtnSecondary = ({ touch, text }: any) => {
  return (
    <TouchableOpacity onPress={touch} style={[styles.btn, styles.btnSecondary]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

export const BtnLink = ({ touch, text, iconName }: any) => {
  return (
    <TouchableOpacity onPress={touch}>
      <Icon name={iconName} size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
      <Text style={[styles.screenTextStyle]} >{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 128,
    height: 48,
    borderRadius: 8,
    marginTop: 48,
    justifyContent: 'center'
  },
  btnPrimary: {
    backgroundColor: '#4DBD73',
  },
  btnSecondary: {
    borderWidth: 2,
    borderColor: '#4DBD73',
    borderRadius: 5
  },
  btnText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  //BtnLink
  screenIconStyle: {
    position: 'absolute',
    left: 0,
    marginLeft: 16
  },
  activeBackgroundColor: {
    backgroundColor: COLORS.LIGHT
  },
  screenTextStyle: {
    fontSize: 16,
    marginLeft: 48,
    color: COLORS.PRIMARY
  }
});