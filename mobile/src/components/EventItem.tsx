import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EventItemComponent extends Component {
  render() {
    return (
      <View>
        <Text>This is event item wrapper!</Text>
      </View>
    );
  }
}

export const EventItem = EventItemComponent;