import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
	const id = route.params.id;
	const [result, setResult] = useState(null);

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image source={{ uri: item }} style={styles.image} />;
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 300,
		height: 200,
	},
});

export default ResultsShowScreen;
