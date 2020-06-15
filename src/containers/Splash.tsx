import React from 'react';
import Spinner from 'react-native-spinkit';
import { View, StyleSheet } from 'react-native';

import { ROUTE_NAME } from '../constants/configs';
import { IContainerProps } from '../constants/interfaces';
import { COLORS } from '../constants/styles';

class SplashContainer extends React.Component<IContainerProps> {

  moveToHome = () => this.props.navigation.navigate(ROUTE_NAME.HOME);

  moveToLogin = () => this.props.navigation.navigate(ROUTE_NAME.LOGIN);

  componentDidMount = () => {
    setTimeout(this.moveToLogin, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Spinner color={COLORS.LIGHT} size={80} type={'FadingCircleAlt'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY
  },
  logo: {
    width: 120,
    height: 120
  }
});

export const Splash = SplashContainer;

