import React, { useCallback } from "react";
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from "react-native";

import { pageNames, pageList, PageChangeButton } from "../../systems/PageList";

export default function TestHome({ navigation }) {

	const renderItem = useCallback(({ item }) => {
		return <Button
			title={item.title}
			onPress={() => navigation.navigate(item.link)}
		/>
	});

	//console.log('flatList function');
	return (
		<>
			<PageChangeButton
				navigation={navigation}
				title={'실 동작테스트'}
				name={pageNames.Thumbnail.name}
			/>
			<PageChangeButton
				navigation={navigation}
				name={pageNames.Home.name}
			/>
			<Button
				title="실 동작 테스트"
				onPress={() => navigation.navigate(pageNames.Thumbnail.name)}
			/>
			<FlatList
				data={pageList}
				renderItem={renderItem}
				keyExtractor={item => item.key}
			/>
		</>
	)
}