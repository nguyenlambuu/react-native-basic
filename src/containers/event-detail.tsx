import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import { BtnPrimary, BtnSecondary } from '../components/button';

const { width: WIDTH } = Dimensions.get('window');

class EventDetailContainer extends Component<any> {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: '100%' }} >
                    <ScrollView>
                        <View style={styles.section}>
                            <View style={styles.row}>
                                <Text style={styles.text}>Location:</Text>
                                <Text style={styles.text}>To Ky Street - Cam 1</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.text}>Time:</Text>
                                <Text style={styles.text}>18:30 - 12/02/2020</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.text}>Status:</Text>
                                <Text style={[styles.text, styles.status]}>unresolved</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.text}>Type:</Text>
                                <Text style={[styles.text, styles.status]}>red light crossing</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.text}>License Plate:</Text>
                                <Text style={styles.text}>50N1-56789</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={[styles.text, { marginBottom: 8 }]}>CAPTURED IMAGE:</Text>
                            <SliderBox
                                images={[
                                    'http://placeimg.com/640/480/any',
                                    'http://placeimg.com/640/480/any',
                                    'http://placeimg.com/640/480/any'
                                ]}
                                sliderBoxHeight={248}
                                dotColor="#4DBD73"
                                inactiveDotColor="#CDE4D3"
                                autoplay
                                parentWidth={WIDTH - 64} />
                        </View>
                        <View style={[styles.section, styles.row, {justifyContent: 'space-evenly'}]}>
                            <BtnSecondary text="cancel" />
                            <BtnPrimary text="accept" />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDE4D3',
        paddingTop: 50
    },
    section: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
        marginVertical: 8
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 
    status: {
        textTransform: 'uppercase',
        color: '#EF2D00'
    }
});

export const EventDetail = EventDetailContainer;