// LightDarkTheme.js
import React, { createContext, useState } from 'react';

export const LightDarkThemeContext = React.createContext('light');

export const ThemeProvider = ({ children, theme }) => {
	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
		console.log("toggle");
	};

	return (
		<LightDarkThemeContext.Provider value={{ theme }}>
			{children}
		</LightDarkThemeContext.Provider>
	);
};

//export default LightDarkTheme;
