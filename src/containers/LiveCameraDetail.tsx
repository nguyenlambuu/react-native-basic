import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Video, { OnProgressData, OnLoadData } from 'react-native-video';
import ProgressBar from '../components/ProgressBar';

// import sample from '../assets/videos/sample'

const URL = 'https://vod-progressive.akamaized.net/exp=1592219347~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2304%2F13%2F336521954%2F1333572114.mp4~hmac=9b91949b220a75777a22a914995fde503c5683c2eb6ebb52a056749fb9b0554d/vimeo-prod-skyfire-std-us/01/2304/13/336521954/1333572114.mp4';
const THUMBNAIL = 'https://i.vimeocdn.com/video/783385177_1280.jpg';
const BUTTON_SIZE = 40;

class LiveCameraDetailContainer extends Component<any> {
    videoRef = React.createRef<Video>();
    state = {
        play: true,
        currentTime: 0,
        duration: 0
    }

    private handlePlayPause = () => {
        this.setState({ ...this.state, play: !this.state.play });
    }

    private skipBackward = () => {
        this.videoRef.current?.seek(this.state.currentTime - 5);
        this.setState({ ...this.state, currentTime: this.state.currentTime - 5 })
    }

    private skipForward = () => {
        this.videoRef.current?.seek(this.state.currentTime + 5);
        this.setState({ ...this.state, currentTime: this.state.currentTime + 5 })
    }

    private onSeek = (data: { seekTime: number }) => {
        this.videoRef.current?.seek(data.seekTime);
        this.setState({ ...this.state, currentTime: data.seekTime });
    }

    private onProgress = (data: OnProgressData) => {
        this.setState({ ...this.state, currentTime: data.currentTime });
    }

    private onLoadEnd = (data: OnLoadData) => {
        this.setState({ ...this.state, duration: data.duration, currentTime: data.currentTime })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>To Ky - CAM1</Text>
                <View style={styles.videoContainer}>
                    <Video
                        onLoad={this.onLoadEnd}
                        ref={this.videoRef}
                        style={styles.backgroundVideo}
                        source={{ uri: URL }}
                        poster={THUMBNAIL}
                        resizeMode={'contain'}
                        paused={this.state.play}
                        onProgress={this.onProgress} />
                </View>

                <View style={{ marginTop: 8 }}>
                    <ProgressBar
                        currentTime={this.state.currentTime}
                        duration={this.state.duration > 0 ? this.state.duration : 0}
                        onSlideStart={this.handlePlayPause}
                        onSlideComplete={this.handlePlayPause}
                        onSlideCapture={this.onSeek} />
                </View>

                <View style={styles.controlContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.controlButton} onPress={this.skipBackward}>
                            <Icon name='replay-5' size={BUTTON_SIZE} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.controlButton} onPress={this.handlePlayPause}>
                            <Icon name={this.state.play ? 'play-circle-outline' : 'pause-circle-outline'} size={BUTTON_SIZE} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.controlButton} onPress={this.skipForward}>
                            <Icon name='forward-5' size={BUTTON_SIZE} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.liveContainer}>
                        <Icon2 name='circle' color='red' size={18} />
                        <Text>Live</Text>
                    </View>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 24,
        marginBottom: 24
    },
    videoContainer: {
        backgroundColor: '#ccc',
        paddingTop: 24,
        paddingBottom: 24,
        height: 300,
        width: 400,
    },
    controlContainer: {
        width: 400,
        height: 60,
        marginTop: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    backgroundVideo: {
        height: '100%',
        width: '100%'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 0.75,
    },

    controlButton: {
        marginLeft: 10,
        marginRight: 10
    },

    liveContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 0.15,
        alignSelf: 'flex-end'
    }
})

export const LiveCameraDetail = LiveCameraDetailContainer;