import react, { useContext, useState } from 'react';
import { Text, View, Button } from 'react-native';
import Container from "../component/Container";


// context 코드
// 데이터를 유지하기위한 형태를 제공한다.
// context의 데이터 공유에 문제가 발생하여 다른 방식으로 적용할 예정이다.
// 1안 : json 파일로 저장
// 2안 : AsyncStorage

let Data = {
	debug: [],
};


export const DataCenter = React.createContext(
	useState(
		Data
	));