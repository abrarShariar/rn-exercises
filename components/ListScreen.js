import * as React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Food from './Food';

const FOODS = [
	'Apples',
  'Broccoli',
  'Cookies',
  'Doritos',
  'Eclairs'
]

const ListScreen = () => {
	return (
		<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
			<Text>
				<h1>List Screen</h1>	
			</Text>
			<br></br>
			<FlatList
				data={FOODS}
				keyExtractor={item => item}
				renderItem={({ item }) => 
					<Food name={item}/>
				}
			/>
		</View>
	)
}

export default ListScreen;