import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { IEvent } from '../constants/interfaces';
import { COLORS, SPACES, FONT_SIZES} from '../constants/styles';

const { width: WIDTH } = Dimensions.get('window');

class EventComponent extends Component<{ event: IEvent, onSelectItem(event: any): void }> {

  onSelect = () => {
    this.props.onSelectItem(this.props.event);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onSelect}>
        <View style={styles.container}>
          <View style={styles.leftWrapper}>
            <View style={styles.locationBox}>
              <Icon name="map-marker" size={24} color={COLORS.DARK} style={styles.locationIcon} />
              <Text style={styles.locationCam}>{this.props.event.camera}</Text>
            </View>
            <View style={styles.eventTypeBox}>
              <Text style={styles.eventTypeText}>{this.props.event.violationType}</Text>
            </View>
          </View>

          <View style={styles.rightWrapper}>
            <Text style={styles.dateTime}>{this.props.event.date}</Text>
            <View style={styles.statusBox}>
              <Text style={styles.statusText}>{this.props.event.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WIDTH - SPACES.MD,
    height: 96,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: COLORS.SECONDARY,
  },
  leftWrapper: {
    width: '50%',
    paddingHorizontal: SPACES.SM
  },
  rightWrapper: {
    width: '50%',
    alignItems: 'flex-end',
    paddingHorizontal: SPACES.SM
  },
  locationBox: {
    flexDirection: 'row'
  },
  locationIcon: {
    marginRight: SPACES.SM
  },
  locationCam: {
    fontSize: FONT_SIZES.SM,
    fontWeight: 'bold'
  },
  eventTypeBox: {
    height: 40,
    borderRadius: FONT_SIZES.MD,
    marginVertical: SPACES.SM,
    backgroundColor: COLORS.LIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventTypeText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.XS,
    textTransform: 'uppercase',
    color: COLORS.RED
  },
  dateTime: {
    fontSize: FONT_SIZES.MD,
    fontWeight: 'bold'
  },
  statusBox: {
    width: '100%',
    height: 40,
    marginVertical: SPACES.SM,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  statusText: {
    color: COLORS.RED,
    fontSize: FONT_SIZES.MD,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export const Event = EventComponent;
