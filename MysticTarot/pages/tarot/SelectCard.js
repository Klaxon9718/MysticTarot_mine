// pages/tarot/SelectCard.js
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container";

// files
import {allPageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

//useContext();

export default function SelectCard() {
	const navigation = useNavigation();
	return (
		<View>
			<Text>카드 선택</Text>
			<PageModule.PageChangeButton
				navigation={navigation}
				name={pageNames.Result.name}
			/>
		</View>
	);
}