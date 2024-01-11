// pages/Home.js
import React, { useCallback } from "react";
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from "react-native";

//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

import pageList, { PageBackButton } from "../systems/PageList";


export default function Home({ navigation }) {

	const renderItem = useCallback(({ item }) => {
		return <Button
			title={item.title}
			onPress={() => navigation.navigate(item.link)}
		/>
	});

	return (
		<>
			<PageBackButton 
				navigation={navigation}/>
			<FlatList
				data={pageList}
				renderItem={renderItem}
				keyExtractor={item => item.key}
			/>
		</>
	)
}


/*
	BackHandler.addEventListener('hardwareBackPress', () => {
		// Android에서 뒤로가기 버튼을 눌렀을 때 앱 종료
		if (Platform.OS === 'android') {
			BackHandler.exitApp();
			return true;
		}
		return false;
	});
*/