import React, { Component } from "react";
import { View, Text } from 'react-native';

class HeaderComponent extends Component<any> {

  rendern() {
    return(<View>
      <Text>This is header!</Text>
    </View>)
  }
}

export const Header = HeaderComponent;
