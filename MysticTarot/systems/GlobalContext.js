import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useState } from 'react';

// 전역적으로 사용하는 데이터를 보관한다.
/**
 * @
 */

const GlobalContext = createContext({ 
	nevigation : createStackNavigator()
});

export default GlobalContext;

/* src/contexts/User.js */