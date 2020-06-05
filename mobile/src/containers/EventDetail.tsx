import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IReduxReducers, IContainerProps} from '../constants/interfaces';
import {Actions} from '../actions';

class EventDetailContainer extends Component<IContainerProps> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Event Detail Container</Text>
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
    actions: bindActionCreators({...Actions.CommonActions}, dispatch),
  };
};

export const Detail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetailContainer);
