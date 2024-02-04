import { Button } from "react-native";
import { CommonActions, useNavigation } from '@react-navigation/native';

/**
 * @param {*} props 
 * @param {title} title
 * @param {name} name
 * @example `<PageChangeButton
				name={pageNames.Home.name}
			/>`
 * @example `<PageChangeButton
				title={'실 동작테스트'}
				name={pageNames.Home.name}
			/>`
 */
export const PageChangeButton = (props) => {
	const navigation = useNavigation();

	const title = props.title ? props.title : props.name;
	const name = props.name ? props.name : props.title;

	return (<Button
		title={title}
		onPress={() => navigation.navigate(name)}
	/>)
}

/**
 * @param value 
 * @example `<PageBackButton
				navigation={navigation}/>`
*/
export const PageBackButton = (props) => {
	const navigation = useNavigation();

	const title = props.title ? props.title : '<-';

	return (<Button
		title={title}
		onPress={() => {
			navigation.goBack();
		}}
	/>)
}

/**
 * 
 * @param {*} props 
 * @returns 
 * @detail 홈으로 이동하는 버튼 
 */

export const HomeButton = (props) => {
	const navigation = useNavigation();

	const title = props.title ? props.title : '초기화면으로';

	return (<Button
		title={title}
		onPress={() => {
			navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [
						{ name: 'Home' } // 초기화 후 추가할 첫 화면의 이름
					],
				})
			);
		}}
	/>)
}
