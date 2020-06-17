import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { COLORS } from '../constants/styles';

class SortByComponent extends Component {
    radio_props = [
        { label: 'By Type', value: 2 },
        { label: 'By Status', value: 1 },
        { label: 'None', value: 0 },
    ];

    getInitialState = () => {
        return {
            value: 0,
        }
    };

    render() {
        return (
            <View>
                <RadioForm
                    buttonColor={COLORS.PRIMARY}
                    labelColor={COLORS.PRIMARY}
                    radio_props={this.radio_props}
                    initial={0}
                    onPress={(value: { label: string, value: number }) => { this.setState({ value: value }) }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({});

export const SortBy = SortByComponent;
