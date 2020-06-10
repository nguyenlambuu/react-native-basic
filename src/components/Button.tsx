import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const BtnPrimary = ({ touch, text }: any) => {
  return (
    <TouchableOpacity onPress={touch} style={[styles.btn, styles.btnPrimary]}>
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
  }
});