// page name
// system
import * as React from 'react';
import { Text, View, Button } from 'react-native';
//import Container from "../component/Container";


// files
import { PageChangeButton, pageNames } from '../../systems/PageList';

//useContext();

export default function Result({navigation}) {
	return (
		<View>
			<Text>Result</Text>
			<Button
				title={`초기화면으로 (네비게이션 초기화)`}
				onPress={() => {
					console.log("hello");
				}}
			/>
		</View>
	);
}