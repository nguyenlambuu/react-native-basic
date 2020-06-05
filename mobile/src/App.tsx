import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigators from './navigators/index';
import rootStore from './ReduxStore';

const store = rootStore();

export default class App extends React.Component<any> {
  navigator: any;

  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <AppNavigators
              ref={(navigator) => {
                this.navigator = navigator;
              }}
            />
          </Provider>
      </SafeAreaView>
    );
  }
}
