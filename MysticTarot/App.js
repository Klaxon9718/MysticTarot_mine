import * as React from 'react';
import { StyleSheet, Text, View, Button, Settings } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Navigator from './systems/Navigator';

// for develop 
import TestPage from './pages/Test/TestPage';
import { GlobalContextProvider } from './systems/useGlobalContext';


export default function App() {
	const SystemContext = React.createContext(SystemContext);
	return (
		<NavigationContainer>
			<GlobalContextProvider>
				<Navigator debug={true} />
			</GlobalContextProvider>
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
