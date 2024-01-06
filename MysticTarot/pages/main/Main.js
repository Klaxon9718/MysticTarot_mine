// /pages/main/Main.js
// system
import react from 'react';
import { Text, View, Button } from 'react-native';
//import Container from "../component/Container";

// files
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

export default function Main({ navigation }) {
	return (
		<View>
			<Text>Main</Text>
		</View>
	);
	/*
	function renderItem ({item}){
		return <Button title={item.title} 
			onPress={ () => navigation.navigate(item.link)}/>
	}

	console.log('flatList function');
	return(
		<>
			<FlatList data={pageList}
				renderItem={renderItem}
				keyExtractor={ item => item.id }
			/>
		</>
	)
	*/
}
