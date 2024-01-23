import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { createContext, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
	const contextValue = useContext(NavigationContext);
	if (!contextValue) {
		throw new Error("useNavigation must be used within a NavigationProvider");
	}
	return contextValue;
};

export const NavigationProvider = ({ children }) => {
	const navigation = useNavigation();
	return (
		<NavigationContext.Provider value={navigation}>
			{children}
		</NavigationContext.Provider>
	);
};

/*
// pageList
import Home from '../pages/Home';
import Store from '../pages/store/Store';
import Setting from '../pages/main/Setting';
import SelectSpread from '../pages/tarot/SelectSpread';
import SelectCard from '../pages/tarot/SelectCard';
import Thumbnail from '../pages/main/Thumbnail';
import Result from '../pages/record/Result';

export const AppNavigator = (Stack) => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Thumbnail" component={Thumbnail} />
			<Stack.Screen name="Store" component={Store} />
			<Stack.Screen name="Setting" component={Setting} />
			<Stack.Screen name="SelectSpread" component={SelectSpread} />
			<Stack.Screen name="SelectCard" component={SelectCard} />
			<Stack.Screen name="Result" component={Result} />
		</Stack.Navigator>
	);
}*/
