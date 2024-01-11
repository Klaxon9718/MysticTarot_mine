// pages/tarot/SelectCard.js
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
//import Container from "../component/Container";


// files
import { PageChangeButton, pageNames } from '../../systems/PageList';

//useContext();

export default function SelectCard({navigation}) {
	return (
		<View>
			<Text>카드 선택</Text>
			<PageChangeButton
				navigation={navigation}
				name={pageNames.Result.name}
			/>
		</View>
	);
}