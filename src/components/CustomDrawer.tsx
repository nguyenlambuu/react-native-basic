import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ROUTE_NAME } from '../constants/configs';
import { COLORS } from '../constants/styles';

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
                        <Icon name="home" size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
                        <Text style={styles.screenTextStyle} onPress={this.navigateToScreen(ROUTE_NAME.HOME)}>{ROUTE_NAME.HOME}</Text>
                    </View>

                    {/* LIVE CAMERA */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.LIVE_CAMERA) ? styles.activeBackgroundColor : null]}>
                        <Icon name="video-camera" size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
                        <Text style={[styles.screenTextStyle]} onPress={this.navigateToScreen(ROUTE_NAME.LIVE_CAMERA)}>{ROUTE_NAME.LIVE_CAMERA}</Text>
                    </View>

                    {/* CHANGE PASSWORD */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.CHANGE_PASSWORD) ? styles.activeBackgroundColor : null]}>
                        <Icon name="lock" size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
                        <Text style={[styles.screenTextStyle]} onPress={this.navigateToScreen(ROUTE_NAME.CHANGE_PASSWORD)}>{ROUTE_NAME.CHANGE_PASSWORD}</Text>
                    </View>

                    {/* SETTINGS */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.SETTINGS) ? styles.activeBackgroundColor : null]}>
                        <Icon name="cog" size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
                        <Text style={[styles.screenTextStyle]} onPress={this.navigateToScreen(ROUTE_NAME.SETTINGS)}>{ROUTE_NAME.SETTINGS}</Text>
                    </View>

                    {/* LOGOUT */}
                    <View style={[styles.screenStyle, (this.props.activeItemKey == ROUTE_NAME.LOGOUT) ? styles.activeBackgroundColor : null]}>
                        <Icon name="sign-out" size={24} color={COLORS.PRIMARY} style={styles.screenIconStyle} />
                        <Text style={[styles.screenTextStyle]} onPress={this.navigateToScreen(ROUTE_NAME.LOGOUT)}>{ROUTE_NAME.LOGOUT}</Text>
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