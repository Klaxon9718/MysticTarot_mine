// spreadStyles.js
import { StyleSheet } from 'react-native';

const buttonSize = 150;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	spreadButton: {
		margin: 10,
		padding: 10,
		width: buttonSize,
		height: buttonSize,
		backgroundColor: '#f0f0f0',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	spreadContentContainer: {
		alignItems: 'center', // 이미지와 텍스트를 세로로 정렬
	},
	spreadImage: {
		width: buttonSize - 40,
		height: buttonSize - 40,
		borderRadius: (buttonSize - 40) / 2,
		alignSelf: 'center', // 이미지를 가로로 정렬
	},
	spreadName: {
		fontWeight: 'bold',
		fontSize: 16,
		marginTop: 5, // 이미지와 텍스트 사이의 간격 조절
	},
	spreadContent: {
		textAlign: 'center',
	},
});

export default styles;
