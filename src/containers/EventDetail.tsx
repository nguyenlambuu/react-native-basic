import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IReduxReducers } from '../constants/interfaces';
import { Actions } from '../actions';
import { ROUTE_NAME } from '../constants/configs';
import { COLORS } from '../constants/styles';

import { BtnPrimary, BtnSecondary } from '../components/Button';
import { Map } from '../components/Map';

const { width: WIDTH } = Dimensions.get('window');

class EventDetailContainer extends Component<any> {
  state = {
    isAccept: false
  }

  componentDidMount() {
    console.log(this.props.event)
  }

  static navigationOptions = () => ({
    title: ROUTE_NAME.EVENT_DETAIL,
  })

  goBack = () => {
    this.props.navigation.goBack();
  }

  onAccepted = () => {
    this.setState({ isAccept: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: '100%' }} >
          <ScrollView>
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
                <Map />
              </View>
            </View> : null}
            <View style={[styles.section, styles.row, { justifyContent: 'space-evenly' }]}>
              <BtnSecondary text="cancel" touch={this.goBack} />
              <BtnPrimary text="accept" touch={this.onAccepted} />
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
    backgroundColor: '#CDE4D3'
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
    color: '#EF2D00'
  },
  containerMap: {
    height: 300,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY
  }
});

const violationImages = [
  'http://placeimg.com/640/480/any',
  'http://placeimg.com/640/480/any',
  'http://placeimg.com/640/480/any'
];

export const EventDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetailContainer);
