import * as React from 'react';
import { View, Text } from 'react-native';

const Food = ({ name }) => {
	return (
		<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink', marginBottom: '20px', paddingTop: '10px' }}>
			<Text style={{ width: '100px', textAlign: 'center' }}>{name}</Text>
			<br></br>
		</View>
	)
}

export default Food;