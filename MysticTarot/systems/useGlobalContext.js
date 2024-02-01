import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

class DataStruct{
	constructor(){
		// 클래스 초기화
	}
}

export const GlobalContextProvider = ({ children }) => {
	const [data, setData] = useState("test State");
	const Data = {
		test : "test context",
		dataState : [data, setData]
	};

	return(
		<GlobalContext.Provider value={Data}>
			{children}
		</GlobalContext.Provider>
	);
};

/**
 * @detail 전역적으로 사용하는 데이터를 관리하는 Context
 * @class
 * @member
 */
export default () => useContext(GlobalContext);