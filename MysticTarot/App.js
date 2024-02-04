import * as React from 'react';
import { StyleSheet, Text, View, Button, Settings } from 'react-native';

import { GlobalContextProvider } from './systems/useGlobalContext';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './systems/Navigator';
import { StatusBar } from 'expo-status-bar';

// for develop 
const debug = true;

export default function App() {
	// 글로벌 콘텍스트 데이터 조정 코드 삽입 예정

	return (
		<GlobalContextProvider>
			<NavigationContainer>
				<Navigator debug={debug} />
			</NavigationContainer>
		</GlobalContextProvider>
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
