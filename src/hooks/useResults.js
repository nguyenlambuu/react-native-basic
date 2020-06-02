import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (error) {
			console.log(error);
			setErrorMessage('💀 Something went wrong!');
		}
	};

	useEffect(() => {
		searchApi('beef');
	}, []);

	return [searchApi, results, errorMessage];
};
