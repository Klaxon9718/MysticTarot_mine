import * as React from 'react';
import { StyleSheet, Text, View, Button, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// for develop 
import TestHome from './pages/Test/TestHome';
import TestPage from './pages/Test/TestPage';

// pageList
import Home from './pages/Home';
import Store from './pages/store/Store';
import Setting from './pages/main/Setting';
import SelectSpread from './pages/tarot/SelectSpread';
import SelectCard from './pages/tarot/SelectCard';
import Thumbnail from './pages/main/Thumbnail';
import Result from './pages/record/Result';


function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const Stack = createStackNavigator();
//네비게이션을 context로 변환할 필요가 있음


export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="TestHome" component={TestHome} />
				<Stack.Screen name="TestPage" component={TestPage} />

				<Stack.Screen name="Home" component={Home} />
				
				<Stack.Screen name="Thumbnail" component={Thumbnail} />

				<Stack.Screen name="Store" component={Store} />
				<Stack.Screen name="Setting" component={Setting} />
				<Stack.Screen name="SelectSpread" component={SelectSpread} />
				<Stack.Screen name="SelectCard" component={SelectCard} />

				<Stack.Screen name="Result" component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
