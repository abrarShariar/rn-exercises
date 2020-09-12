import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const ColorScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={{ padding: '10px'}}>
				<strong>Rainbow</strong>
				<FlatList
					horizontal
					style={{ flexWrap: 'wrap', height: '50px'}}
					data={RAINBOW}
					keyExtractor={item => item.hexCode}
					renderItem={({ item }) => {
						return (
							<Text onPress={() => navigation.navigate('ColorPalette', { colors: RAINBOW })} style={{ flexDirection: 'row', width: '30px', height: '30px', padding: '5px', margin: '5px', backgroundColor: item.hexCode, display: 'inline'  }}></Text>
						)
					}}
				/>
			</View>
			<View style={{ padding: '10px', flex: 1 }}>
				<strong>Frontend Masters</strong>
					<FlatList
						horizontal
						style={{ flexWrap: 'wrap', height: '50px'}}
						data={FRONTEND_MASTERS}
						keyExtractor={item => item.hexCode}
						renderItem={({ item }) => {
							return (
								<Text onPress={() => navigation.navigate('ColorPalette', { colors: FRONTEND_MASTERS })} style={{ flexDirection: 'row', width: '30px', height: '30px', padding: '5px', margin: '5px', backgroundColor: item.hexCode, display: 'inline'  }}></Text>
							)
						}}
					/>
			</View>
		</SafeAreaView>
	)
}

export default ColorScreen