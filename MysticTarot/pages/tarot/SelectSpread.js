// pages/tarot/SelectSpread.js
// system
import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Container from "../component/Container";


// files
import { allPageList, pageNames } from "../../systems/Page";
import * as PageModule from "../../modules/PageModule";
import useGlobalContext from '../../systems/useGlobalContext';

//useContext();

//useEffect
import { useEffect, useState } from 'react';

//styleSheet
import styles from './spreadStyles';
import spreadInfo from './data.json';


export default function SelectSpread() {
	const navigation = useNavigation();
	const global = useGlobalContext();
	const [data, setData] = global.dataState;
	//setData("selectSpread");

	const [spreadData, setSpreadData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setSpreadData(spreadInfo.spread);
				console.log("fetchData" + spreadInfo.spread);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const renderSpreadItem = ({ item }) => (
		
		<TouchableOpacity style={styles.spreadButton}
			onPress={() => console.log(`Clicked on ${item.name}` + `${item.image}`)}>
			
			<View style={styles.spreadContentContainer}>
				<Image source={{uri: item.image}} style={styles.spreadImage} />
				<Text style={styles.spreadName}>{item.name}</Text>
				<Text style={styles.spreadContent}>{item.content}</Text>
			</View>
		</TouchableOpacity>
	);


	return (
		<View style={styles.container}>
			<FlatList
				data={spreadData}
				renderItem={renderSpreadItem}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
			/>
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