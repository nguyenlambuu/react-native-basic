import React from 'react';
import AppNavigators from './navigators/index';
import rootStore from './ReduxStore';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';

const store = rootStore();

export default class App extends React.Component<any> {
  navigator:any;

  state = {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Provider store={store}>
          <AppNavigators ref={navigator => {this.navigator = navigator}}/>
        </Provider>
      </SafeAreaView>
    );
  }
}
