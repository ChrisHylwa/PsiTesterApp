import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Alert, Button} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import TestScreen from './src/test-screen'
import HomeScreen from './src/home-screen'
import StatsScreen from './src/stats-screen'

const App = StackNavigator({
  Home: {screen: HomeScreen},
  Test: {screen: TestScreen},
  Stats: {screen: StatsScreen},
});

export default App;