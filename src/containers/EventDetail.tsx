import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SliderBox } from 'react-native-image-slider-box';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../actions';
import { IReduxReducers } from '../constants/interfaces';
import { ROUTE_NAME } from '../constants/configs';
import { COLORS } from '../constants/styles';

import { BtnPrimary, BtnSecondary } from '../components/Button';

const { width: WIDTH } = Dimensions.get('window');

class EventDetailContainer extends Component<any> {
  state = {
    isAccept: false
  }

  componentDidMount() {
  }

  static navigationOptions = () => ({
    title: ROUTE_NAME.DETAIL,
  })

  onCancel = () => {
    this.props.navigation.goBack();
  }

  onAccept = () => {
    this.setState({ isAccept: true });
  }

  onRegionChange(region: any) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: '100%' }} >
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.text}>Location:</Text>
                <Text style={styles.text}>{this.props.event.camera}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Time:</Text>
                <Text style={styles.text}>{this.props.event.date}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>Status:</Text>
                <Text style={[styles.text, styles.status]}>{this.props.event.status}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>Type:</Text>
                <Text style={[styles.text, styles.status]}>{this.props.event.violationType}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>License Plate:</Text>
                <Text style={styles.text}>{this.props.event.licensePlate}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.text, { marginBottom: 8 }]}>CAPTURED IMAGE:</Text>
              <SliderBox
                images={this.props.event.images}
                sliderBoxHeight={248}
                dotColor="#4DBD73"
                inactiveDotColor="#CDE4D3"
                autoplay
                parentWidth={WIDTH - 64} />
            </View>

            {this.state.isAccept ? <View style={styles.section}>
              <Text style={[styles.text, { marginBottom: 8 }]}>ROUTING:</Text>
              <View style={styles.containerMap}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                  <Marker
                    draggable
                    coordinate={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                    }}
                    onDragEnd={(e) => console.log(JSON.stringify(e.nativeEvent.coordinate))}
                    title={'Test Marker'}
                    description={'This is a description of the marker'}
                  />
                </MapView>
              </View>
            </View> : null}
            <View style={[styles.section, styles.row, { justifyContent: 'space-evenly' }]}>
              <BtnSecondary text="cancel" touch={this.onCancel} />
              <BtnPrimary text="accept" touch={this.onAccept} />
            </View>
          </ScrollView>

        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: IReduxReducers) => {
  return {
    ...state.eventReducer, ...state.commonReducer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({ ...Actions.CommonActions }, dispatch),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  status: {
    textTransform: 'uppercase',
    color: COLORS.RED
  },
  containerMap: {
    height: 300,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

const violationImages = [
  'http://placeimg.com/640/480/any',
  'http://placeimg.com/640/480/any',
  'http://placeimg.com/640/480/any'
];

export const Detail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetailContainer);
