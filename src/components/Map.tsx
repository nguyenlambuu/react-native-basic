import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { COLORS } from '../constants/styles';

class MapComponent extends Component<any> {
  state = {
    initialRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.initialRegion}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          onDragEnd={(e: any) => console.log(JSON.stringify(e.nativeEvent.coordinate))}
          title={'Test Marker'}
          description={'This is a description of the marker'}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

export const Map = MapComponent;