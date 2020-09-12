import * as React from 'react';
import { View, Text } from 'react-native';

const Color = ({ colorObj }) => {
	const { colorName, hexCode } = colorObj
	return (
		<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: hexCode, marginBottom: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
			<Text style={{ width: '200px', textAlign: 'center' }}>
				{colorName}
			</Text>
		</View>
	)
}

export default Color;