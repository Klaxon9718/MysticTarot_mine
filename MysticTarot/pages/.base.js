// page name
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container";

// files
import {pageList, pageNames} from "../../systems/Page";
import * as PageModule from "../../systems/PageModule";
import useGlobalContext from '../../systems/useGlobalContext';

//useContext();

export default function Base() {
	const navigation = useNavigation();
	const global = useGlobalContext();

	return (
		<View>
			<Text></Text>
		</View>
	);
}