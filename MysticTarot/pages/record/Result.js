// page name
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container"

// files
import {allPageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

export default function Result() {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Result</Text>
			<PageModule.PageBackButton	/>
			<PageModule.HomeButton />
		</View>
	);
}