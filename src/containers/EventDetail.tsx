import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header } from 'react-native-elements';

import { IReduxReducers, IEvent, IContainerProps } from '../constants/interfaces';
import { Actions } from '../actions';
import { ROUTE_NAME } from '../constants/configs';
import { COLORS } from '../constants/styles';

import { BtnPrimary, BtnSecondary } from '../components/Button';
import { TitleButton } from '../components/TitleButton';
import { Map } from '../components/Map';
import request from '../api/request';
import { API_CONSTANTS } from '../constants/endpoint';
import { AxiosResponse } from 'axios';

const { width: WIDTH } = Dimensions.get('window');

class EventDetailContainer extends Component<IContainerProps> {
  state = {
    isAccept: false,
    event: {} as any,
    images: [] as string[]
  }


  componentDidMount() {
    this.getEvent(this.props.id);
  }

  async getEvent(id: number) {
    try {
      // 1) Call API to get data
      const response = await request.get(`${API_CONSTANTS.EVENTS}${id}/`);
      if (response.data.object_path) {
        let paths = JSON.parse(response.data.object_path).slice(0, 9);
        const imgRes = paths.map((p: any) => this.getImagesURL(p));

        // 2) Set state
        this.setState({ event: response.data });
        this.setState({ ...this.state, images: imgRes });
      }
      // 3) Render UI
    } catch (error) {
      console.log(error);
    }
  }

  getImagesURL(objPath: any) {
    const { frame_id, frame_width, frame_height, position } = objPath;
    const { x, y, w, h } = position;
    const url: string = `http://172.18.4.9/bifrost/frame?frame_id=${frame_id}&bbox=${x},${y},${w},${h}&width=480&height=360`;
    return url;
  };

  goBack = () => {
    this.props.navigation.goBack();
  }

  onAccepted = () => {
    // TODO:
    // 1) Send data to BE to changed status

    // 2) Get data to receives cordinates

    // 3) Render maps

    // 4) Change button.
    this.setState({ isAccept: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: '100%' }} >
          <Header
            containerStyle={styles.headerStyle}
            leftComponent={<TitleButton touch={() => this.props.navigation.goBack()} iconName="arrow-back" iconSize={24} color='#fff' />}
            centerComponent={{ text: ROUTE_NAME.EVENT_DETAIL, style: { color: '#fff' } }}
          />
          {this.state.event ? <ScrollView>
            <View style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.text}>Location:</Text>
                <Text style={styles.text}>{this.state.event.camera?.name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Time:</Text>
                <Text style={styles.text}>{this.state.event.violation_time}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>Status:</Text>
                <Text style={[styles.text, styles.status]}>{this.state.event.violation_sts}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>Type:</Text>
                <Text style={[styles.text, styles.status]}>{this.state.event.violation_type?.name}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.text}>License Plate:</Text>
                <Text style={styles.text}>{this.state.event.license_serial}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.text, { marginBottom: 8 }]}>CAPTURED IMAGE:</Text>
              <SliderBox
                images={this.state.images}
                sliderBoxHeight={248}
                dotColor={COLORS.PRIMARY}
                inactiveDotColor={COLORS.DARK}
                paginationBoxVerticalPadding={0}
                // disableOnPress= {true} 
                onCurrentImagePressed={() => console.log('pressed')}
                circleLoop={true}
                resizeMode='contain'
                imageLoadingColor={COLORS.PRIMARY}
                ImageComponentStyle={{ backgroundColor: COLORS.SECONDARY }}
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
          </ScrollView> : null}

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
  },
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    alignItems: 'center',
    paddingTop: 0
  }
});

const violationImages = [
  "172.18.4.9/bifrost/frame?frame_id=30442047&bbox=90,298,370,166&width=120&height=60",
];

export const EventDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetailContainer);
