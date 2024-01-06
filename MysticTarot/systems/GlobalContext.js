import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useState } from 'react';

const GlobalContext = createContext({ 
	nevigation : createStackNavigator()
});

export default GlobalContext;

/* src/contexts/User.js */