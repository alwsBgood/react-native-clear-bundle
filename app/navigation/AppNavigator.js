import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../components/screens/MainScreen/components/MainScreen';

const AppStack = createStackNavigator(
  {
    Home: MainScreen,
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: { header: null },
  }
);

export default createAppContainer(AppStack);
