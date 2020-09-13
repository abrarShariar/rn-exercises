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
			<br></br>
			<Button
				style={styles.button}
        title="Go to Color Screen"
        onPress={() => navigation.navigate('ColorScreen')}
      />

			<br></br>
			<Button
				style={styles.button}
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('CounterScreen')}
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