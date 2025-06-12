import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/NavigationUtil';
import {FilterProvider} from '../context/FilterContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <FilterProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNavigator} />
      </Tab.Navigator>
    </FilterProvider>
  );
};

export default BottomTabNavigator;
