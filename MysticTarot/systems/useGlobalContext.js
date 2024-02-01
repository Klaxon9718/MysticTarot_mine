import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useContext, useState } from 'react';



// 전역적으로 사용하는 데이터를 보관한다.
/**
 * @
 */
const GlobalContext = createContext();


export const GlobalContextProvider = ({ children }) => {
	const Data = {test : "test context"};

	return(
		<GlobalContext value={Data}>
			{children}
		</GlobalContext>
	);
};


export default () => useContext(GlobalContext);


/* src/contexts/User.js */