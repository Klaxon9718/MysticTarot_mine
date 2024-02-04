// pages/tarot/SelectSpread.js
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container";

// files
import { allPageList, pageNames } from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";
import useGlobalContext from '../../systems/useGlobalContext';

//useContext();

export default function SelectSpread() {
	const navigation = useNavigation();
	const global = useGlobalContext();
	const [data, setData] = global.dataState;
	//setData("selectSpread");

	return (
		<View>
			<Text>{global.test}</Text>
			<Text>{data}</Text>
			<Text>SelectSpread</Text>
			<Button
				onPress={() => setData("selectSpread")}
				title="change data"
			/>
			<PageModule.PageChangeButton
				navigation={navigation}
				name={pageNames.SelectCard.name}
			/>
		</View>
	);
}