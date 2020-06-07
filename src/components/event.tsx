import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: WIDTH } = Dimensions.get('window');

class EventComponent extends Component<any> {

    render() {
        return (<View style={styles.container}>
            <View style={styles.leftWrapper}>
                <View style={styles.locationBox}>
                    <Icon name="map-marker" size={24} color="#000" style={styles.locationIcon} />
                    <Text style={styles.locationCam}>To Ky Street CAM1</Text>
                </View>
                <View style={styles.eventTypeBox}>
                    <Text style={styles.eventTypeText}>Red light crossing</Text>
                </View>
            </View>

            <View style={styles.rightWrapper}>
                <Text style={styles.dateTime}>18:30 - 12/02/2020</Text>
                <View style={styles.statusBox}>
                    <Text style={styles.statusText}>Unresolved</Text>
                </View>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: WIDTH - 16,
        height: 96,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#CDE4D3',
    },
    leftWrapper: {
        width: '50%',
        paddingHorizontal: 8
    },
    rightWrapper: {
        width: '50%',
        alignItems: 'flex-end',
        paddingHorizontal: 8
    },
    locationBox: {
        flexDirection: 'row'
    },
    locationIcon: {
        marginRight: 8
    },
    locationCam: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    eventTypeBox: {
        height: 40,
        borderRadius: 16,
        marginVertical: 8,
        backgroundColor: '#E5F3E9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventTypeText: {
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#EF2D00'
    },
    dateTime: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    statusBox: {
        width: '100%',
        height: 40,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    statusText: {
        color: '#EF2D00',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export const Event = EventComponent;