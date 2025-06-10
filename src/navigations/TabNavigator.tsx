import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/NavigationUtil';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
