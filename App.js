import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ListScreen, FlatListScreen, ColorScreen, ColorPalette } from './components';

const Stack = createStackNavigator();

const App = () => {
	return (
		<SafeAreaView style={{ flex: 2 }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="HomeScreen" component={HomeScreen} />	
					<Stack.Screen name="ListScreen" component={ListScreen} />
					<Stack.Screen name="FlatListScreen" component={FlatListScreen} />
					<Stack.Screen name="ColorScreen" component={ColorScreen} />
					<Stack.Screen name="ColorPalette" component={ColorPalette} />

				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	safeArea: {
		flex: 2
	},
	backgroud: {
		backgroudColor: 'pink'
	},
	buttonStyle: {
		marginBottom: '20px'
	},
	cyan: {
		backgroundColor: '#2aa198',
	},
	blue: {
		backgroundColor: '#268bd2'
	},
	magenta: {
		backgroundColor: '#d33682'
	},
	orange: {
		backgroundColor: '#cb4b16'
	},
	box: {
		padding: 10,
		justifyContent: 'center',
		marginBottom: 10,
		width: '200px'
	}
})

export default App;