import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';

import { Actions } from '../actions';
import { IEvent, IReduxReducers, IContainerProps } from '../constants/interfaces';
import { ROUTE_NAME } from '../constants/configs';
import { COLORS, SPACES } from '../constants/styles';
import { Event } from '../components/Event';
import { TitleButton } from '../components/TitleButton';
import ModalComponent from '../components/Modal';
import { SortBy } from '../components/SortBy';
import request from '../api/request';
import { API_CONSTANTS } from '../constants/endpoint';
import { SafeAreaView } from 'react-native-safe-area-context';

class HomeContainer extends Component<IContainerProps> {

  state = {
    events: [],
    showModal: false
  }

  toggleMenu = () => {
    this.props.navigation.toggleDrawer()
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  async getEventsList() {
    try {
      // 1) Call API to get data
      const response = await request.get(API_CONSTANTS.EVENTS);

      // 2) Set state
      this.setState({ events: response.data });

      // 3) Render UI
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getEventsList();
  }

  onSelectItem = (id: number) => {
    console.log('clicked!');
    this.props.actions.selectEvent(id);
    this.props.navigation.navigate(ROUTE_NAME.EVENT_DETAIL, id);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          containerStyle={styles.headerStyle}
          leftComponent={<TitleButton touch={this.toggleMenu} iconName="menu" iconSize={24} color='#fff' />}
          centerComponent={{ text: ROUTE_NAME.HOME, style: { color: '#fff' } }}
          rightComponent={<TitleButton touch={this.showModal} iconName="filter-list" iconSize={24} color='#fff' />}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={this.state.events}
          keyExtractor={(item: any) => item.violation_id.toString()}
          renderItem={({ item }) => {
            return <Event event={item} onSelectItem={this.onSelectItem} />
          }} />
        {this.state.showModal ?
          <ModalComponent>
            <SortBy />
          </ModalComponent> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT
  },
  listContainer: {
    alignItems: 'center',
    marginTop: SPACES.SM
  },
  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
    height: 50,
    alignItems: 'center',
    paddingTop: 0,
  }
});

const mapStateToProps = (state: IReduxReducers) => {
  return { ...state.commonReducer };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(
      { ...Actions.EventActions },
      dispatch,
    ),
  };
};


export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

const eventsList: Array<IEvent> = [
  {
    "id": 1,
    "camera": "To Ky Street CAM1",
    "date": "18:30 - 12/02/2020",
    "violationType": "Red Light Crossing",
    "status": "Unresolved",
    "licensePlate": "50N1-56789"
  },
  {
    "id": 2,
    "camera": "To Ky Street CAM11",
    "date": "18:30 - 12/02/2020",
    "violationType": "Red Light Crossing",
    "status": "Unresolved",
    "licensePlate": "50N1-56789"
  },
  {
    "id": 3,
    "camera": "To Ky Street CAM111",
    "date": "18:30 - 12/02/2020",
    "violationType": "Red Light Crossing",
    "status": "Unresolved",
    "licensePlate": "50N1-56789"
  },
  {
    "id": 4,
    "camera": "To Ky Street CAM1111",
    "date": "18:30 - 12/02/2020",
    "violationType": "Red Light Crossing",
    "status": "Unresolved",
    "licensePlate": "50N1-56789"
  },
  {
    "id": 5,
    "camera": "To Ky Street CAM11111",
    "date": "18:30 - 12/02/2020",
    "violationType": "Red Light Crossing",
    "status": "Unresolved",
    "licensePlate": "50N1-56789"
  }
];
