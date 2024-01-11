import React from 'react';
import styled from 'styled-components'
import User from '../ComponentsUser'
import UserContext from '../ContextUser';

import Test from './Test';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const App = () => {
	return (
		<UserContext.Provider value={{ name: "hello" }}>
			<Container>
				<User />
				<Test />
			</Container>
		</UserContext.Provider>
	);
};

export default App

/* src/App.js */