import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CounterScreen = () => {
	const [ counter, setCounter ] = useState(0);
	return (
		<SafeAreaView>
			<View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
				<Text>
					<h1>Counter Screen</h1>
					<h3>Counter: {counter}</h3>
					<Button
						onPress={() => setCounter(val => val + 1)}
						title="+"
					/>
					<Button
						onPress={() => setCounter(val => val - 1)}
						title="-"
					/>
				</Text>
			</View>
		</SafeAreaView>
	)
}

export default CounterScreen