// pages/main/Thumbnail.js
import * as React from 'react';
import { Text, View, Button } from 'react-native';

import { PageChangeButton, pageNames } from '../../systems/PageList';

export default function Thumbnail({navigation}) {
	return (
		<View>
			<Text>Thumbnail</Text>
			<PageChangeButton
				navigation={navigation}
				title={'실 동작테스트'}
				name={pageNames.Home.name}
			/>

		</View>
	);
}