import React, { useCallback } from "react";
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

import {allPageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

export default function TestHome() {
	const navigation = useNavigation();
	const renderItem = useCallback(({ item }) => {
		return <Button
			title={item.title}
			onPress={() => navigation.navigate(item.link)}
		/>
	});

	//console.log('flatList function');
	return (
		<>
			<PageModule.PageChangeButton
				title={'테스트 페이지'}
				name={'TestPage'}
			/>
			<PageModule.PageChangeButton
				title={'실 동작테스트'}
				name={pageNames.Thumbnail.name}
			/>
			<PageModule.PageChangeButton
				name={pageNames.Home.name}
			/>
			<FlatList
				data={allPageList}
				renderItem={renderItem}
				keyExtractor={item => item.key}
			/>
		</>
	)
}