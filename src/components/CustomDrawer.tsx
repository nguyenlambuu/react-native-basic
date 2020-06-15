import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ROUTE_NAME } from '../constants/configs';
import { COLORS } from '../constants/styles';
import { BtnLink } from '../components/Button';

export default class drawerContentComponents extends Component<any> {

    navigateToScreen = (route: any) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>USER ID: 264527364</Text>
                </View>
                <View style={styles.screenContainer}>
                    {/* HOME */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.HOME) ? styles.activeBackgroundColor : null]}>
                        <BtnLink touch={this.navigateToScreen(ROUTE_NAME.HOME)} iconName='home' text={ROUTE_NAME.HOME} />
                    </View>

                    {/* LIVE CAMERA */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.LIVE_CAMERA) ? styles.activeBackgroundColor : null]}>
                        <BtnLink touch={this.navigateToScreen(ROUTE_NAME.LIVE_CAMERA)} iconName='video-camera' text={ROUTE_NAME.LIVE_CAMERA} />
                    </View>

                    {/* CHANGE PASSWORD */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.CHANGE_PASSWORD) ? styles.activeBackgroundColor : null]}>
                        <BtnLink touch={this.navigateToScreen(ROUTE_NAME.CHANGE_PASSWORD)} iconName='lock' text={ROUTE_NAME.CHANGE_PASSWORD} />
                    </View>

                    {/* SETTINGS */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.SETTINGS) ? styles.activeBackgroundColor : null]}>
                        <BtnLink touch={this.navigateToScreen(ROUTE_NAME.SETTINGS)} iconName='cog' text={ROUTE_NAME.SETTINGS} />
                    </View>

                    {/* LOGOUT */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.LOGOUT) ? styles.activeBackgroundColor : null]}>
                        <BtnLink touch={this.navigateToScreen(ROUTE_NAME.LOGOUT)} iconName='sign-out' text={ROUTE_NAME.LOGOUT} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: COLORS.DARK,
        flex: 1
    },
    headerContainer: {
        height: 48,
        justifyContent: 'center',
        width: '100%',
        padding: 16
    },
    headerText: {
        color: COLORS.PRIMARY,
        fontWeight: 'bold',
        fontSize: 16
    },
    screenContainer: {
        width: '100%',
    },
    screenStyle: {
        height: 32,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle: {
        fontSize: 16,
        marginLeft: 48,
        color: COLORS.PRIMARY
    },
    screenIconStyle: {
        position: 'absolute',
        left: 0,
        marginLeft: 16
    },
    activeBackgroundColor: {
        backgroundColor: COLORS.LIGHT
    }
});