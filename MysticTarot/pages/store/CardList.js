// page name
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container";


// files
import {allPageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";

//useContext();

export default function Base() {
	const navigation = useNavigation();

	return (
		<View>
			<Text></Text>
		</View>
	);
}