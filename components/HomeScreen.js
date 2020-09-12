import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<br></br>
			<Button
				style={styles.button}
        title="Go to List Screen"
        onPress={() => navigation.navigate('ListScreen')}
      />
			<br></br>
			<Button
				style={styles.button}
        title="Go to Flat List Screen"
        onPress={() => navigation.navigate('FlatListScreen')}
      />
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		width: '400px !important'
	}
})

export default HomeScreen;