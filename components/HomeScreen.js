import * as React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<br></br>
			<Button
        title="Go to List Screen"
        onPress={() => navigation.navigate('ListScreen')}
      />
		</View>
	)
}

export default HomeScreen;