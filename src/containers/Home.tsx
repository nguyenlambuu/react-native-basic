import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  Icon from 'react-native-vector-icons/FontAwesome';

import { IReduxReducers, IContainerProps } from '../constants/interfaces';
import { Actions } from '../actions';
import { ROUTE_NAME } from '../constants/configs';

import { EventItem } from '../components/EventItem';

class HomeContainer extends Component<IContainerProps> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      title: ROUTE_NAME.HOME,
      headerLeft: () => { return (<TouchableOpacity onPress={() => { navigation.toggleDrawer() }}>
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>) }
    }
  }
  componentDidMount() {}
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home Container</Text>
        <EventItem />
        <EventItem />
        <Button title="Go to Event Detail" onPress={() => { this.props.navigation.navigate(ROUTE_NAME.DETAIL) }} />
      </View>
    );
  }
}

const mapStateToProps = (state: IReduxReducers) => {
  return {
    ...state.sessionReducer,
    ...state.commonReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(
      { ...Actions.CommonActions },
      dispatch,
    ),
  };
};


export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);