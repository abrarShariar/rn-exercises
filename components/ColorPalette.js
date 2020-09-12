import * as React from 'react';
import { View, Text, SafeAreaView, route } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorPalette = ({ route }) => {
	const { colors } = route.params
	return (
		<FlatList 
			data={colors}
			keyExtractor={item => item.hexCode}	
			renderItem={({ item }) => { 
				return (
					<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: item.hexCode, marginBottom: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
						<Text style={{ width: '200px', textAlign: 'center' }}>
							{item.colorName}
						</Text>
				</View>
				)
			}}
		>
		</FlatList>
	)
}

export default ColorPalette