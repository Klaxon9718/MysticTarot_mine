// pages/tarot/SelectSpread.js
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
//import Container from "../component/Container";

// files
import { PageChangeButton, pageNames } from '../../systems/PageList';

//useContext();

export default function SelectSpread({navigation}) {
	return (
		<View>
			<Text>SelectSpread</Text>
			<PageChangeButton
				navigation={navigation}
				name={pageNames.SelectCard.name}
			/>
		</View>
	);
}