import React, { useCallback } from "react";
import { StyleSheet, View, Button, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

import {allPageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

export default function TestPage() {
	const navigation = useNavigation();
	
	// console.log('flatList function');
	return (
		<View>
			<Text>hello this is Test page</Text>
		</View>
	)
}