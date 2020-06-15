import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from '../actions';
import { IEvent, IReduxReducers, IContainerProps } from '../constants/interfaces';
import { ROUTE_NAME } from '../constants/configs';
import { COLORS, SPACES } from '../constants/styles';
import { Event } from '../components/Event';
import { TitleButton } from '../components/TitleButton';
import request from '../api/request';
import { API_CONSTANTS } from '../constants/endpoint';

class HomeContainer extends Component<IContainerProps> {


  static navigationOptions = ({ navigation }: any) => {
    const toggleMenu = () => {
      navigation.toggleDrawer()
    }
    const sortBy = () => { console.log('Show sort dialog') };

    return {
      title: ROUTE_NAME.HOME,
      headerLeft: () => <TitleButton touch={toggleMenu} iconName="menu" iconSize={24} />,
      headerRight: () => <TitleButton touch={sortBy} iconName="filter-list" iconSize={24} />,
      headerLeftContainerStyle: {
        marginLeft: SPACES.MD
      },
      headerRightContainerStyle: {
        marginRight: SPACES.MD
      }
    }
  }

  state = {
    events: [] as IEvent[]
  }

  navigation = this.props.navigation;

  async getEventsList() {
    try {
      const response = await request.get(API_CONSTANTS.EVENTS);
      this.setState({ events: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getEventsList();
  }

  onSelectItem = (event: any) => {
    this.props.actions.selectEvent(event);
    this.navigation.navigate(ROUTE_NAME.DETAIL);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            <FlatList data={this.state.events} keyExtractor={(item: IEvent) => item.date} renderItem={({ item }) => {
              return <Event event={item} onSelectItem={this.onSelectItem} />
            }} />
          </View>
        </ScrollView>
      </View>
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
  }
})

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
