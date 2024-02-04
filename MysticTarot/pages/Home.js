// pages/Home.js
import * as React from 'react';
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native';
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";

import {allPageList, homePageList, pageNames} from "../systems/Page";
import * as PageModule from "../modules/PageModule";

export default function Home() {
	const navigation = useNavigation();
	const renderItem = React.useCallback(({ item }) => {
		return <Button
			title={item.title}
			onPress={() => navigation.navigate(item.link)}
		/>
	});

	return (
		<>
			<FlatList
				data={homePageList}
				renderItem={renderItem}
				keyExtractor={item => item.key}
			/>
			<PageModule.PageBackButton />
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