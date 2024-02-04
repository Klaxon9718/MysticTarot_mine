// pages/main/Thumbnail.js
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { pageNames } from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

export default function Thumbnail() {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Thumbnail</Text>
			<PageModule.PageChangeButton
				name={pageNames.Home.name}
			/>
		</View>
	);
}