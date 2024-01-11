// page name
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components'
//import Container from "../component/Container";
import UserContext from '../ContextUser';



export default function Test() {
	function ButtonPress() {
		console.log('Button pressed');
		/*return (
			<Text>button press</Text>
		);*/
	}

	return (
		<View>
			<UserContext.Consumer>
				{value => <Text>Name: {value.name}</Text>}
			</UserContext.Consumer>
			<Button title='button' onPress={ButtonPress}/>
		</View>
	);
}