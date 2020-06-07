import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IReduxReducers, IContainerProps } from '../constants/interfaces';
import { Header } from '../components/header';
import { Event } from '../components/event';
import { Actions } from '../actions';

class HomeContainer extends Component<IContainerProps> {

	state = {}

	componentDidMount() { }

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.listContainer}>
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
						<Event />
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E5F3E9'
	},
	listContainer: {
		alignItems: 'center',
		marginTop: 66
	}
})

const mapStateToProps = (state: IReduxReducers) => {
	return {
		...state.sessionReducer,
		...state.commonReducer
	};
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators({ ...Actions.CommonActions, ...Actions.SessionActions }, dispatch)
	}
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

