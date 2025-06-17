import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigations/Navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from './src/utils/Colors';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigations/TabNavigator';
import Filter from './src/screens/Dashboard/Filter';
import {FilterProvider} from './src/context/FilterContext';
import AppNavigator from './src/navigations/Navigation';

const App = () => {
  return (
    <>
      {/* <BottomTabNavigator /> */}
      <AppNavigator />
      {/* <Filter /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: RFValue(20),
    color: Colors.red,
  },
});
