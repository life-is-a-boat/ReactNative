/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './demos/FlatList';
// import App from './demos/DatePickerIOS';
// import App from './demos/ActivityIndicator';
// import App from './note/Props';
// import App from './note/Touch';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
