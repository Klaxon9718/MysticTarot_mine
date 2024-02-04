import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pageList
import Home from '../pages/Home';
import Store from '../pages/store/Store';
import Setting from '../pages/main/Setting';
import SelectSpread from '../pages/tarot/SelectSpread';
import SelectCard from '../pages/tarot/SelectCard';
import Thumbnail from '../pages/main/Thumbnail';
import Result from '../pages/record/Result';

// develop page
import TestHome from '../pages/Test/TestHome';
import TestPage from '../pages/Test/TestPage';

const Stack = createStackNavigator();


const TestNavigator = () => {
	<>

	</>
}

const Navigator = (props) => (
	<>
		<Stack.Navigator>
			{props.debug ? (
				<>
					<Stack.Screen name="TestHome" component={TestHome} />
					<Stack.Screen name="TestPage" component={TestPage} />
				</>
			) : null}
			<Stack.Screen name="Thumbnail" component={Thumbnail} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Store" component={Store} />
			<Stack.Screen name="Setting" component={Setting} />
			<Stack.Screen name="SelectSpread" component={SelectSpread} />
			<Stack.Screen name="SelectCard" component={SelectCard} />
			<Stack.Screen name="Result" component={Result} />
		</Stack.Navigator>
	</>
);

export default Navigator;