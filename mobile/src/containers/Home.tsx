import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IReduxReducers, IContainerProps} from '../constants/interfaces';
import {Actions} from '../actions';
import {ROUTE_NAME} from '../constants/configs';

import {Header} from '../components/Header';
import {EventItem} from '../components/EventItem';

class HomeContainer extends Component<IContainerProps> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <Text>Home Container</Text>
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <Button title="Go to Event Detail" onPress={() => {this.props.navigation.navigate(ROUTE_NAME.DETAIL)}}/>
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
      {...Actions.CommonActions },
      dispatch,
    ),
  };
};


export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);