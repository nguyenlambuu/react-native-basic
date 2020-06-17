import React, { Component } from 'react';
import { Slider } from 'react-native-elements';
interface Props {
    currentTime: number;
    duration: number;
    onSlideCapture: (data: { seekTime: number }) => void;
    onSlideStart: () => void;
    onSlideComplete: () => void;
}
class ProgressBar extends Component<Props> {

    handleOnSlide = (time: number) => {
        this.props.onSlideCapture({ seekTime: time });
    }

    render() {
        return (
            <Slider
                thumbStyle={{
                    width: 6,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: '#000'
                }}
                style={{ width: 200, height: 40 }}
                value={this.props.currentTime}
                minimumValue={0}
                maximumValue={this.props.duration}
                step={1}
                onValueChange={this.handleOnSlide}
                onSlidingStart={this.props.onSlideStart}
                onSlidingComplete={this.props.onSlideComplete}
                minimumTrackTintColor={'#000'}
                maximumTrackTintColor={'#000'}
                thumbTintColor={'#000'}
            />
        );
    }
}

export default ProgressBar;