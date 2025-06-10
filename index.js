/**
 * @format
 */
import 'react-native-reanimated';

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigator from './src/navigations/Navigation';

AppRegistry.registerComponent(appName, () => StackNavigator);
