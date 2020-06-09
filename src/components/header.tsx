import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

class HeaderComponent extends Component<any> {

  render() {
    return (<View style={styles.container}>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#4DBD73',
    justifyContent: 'center',
    zIndex: 10
  }
});

export const Header = HeaderComponent;
