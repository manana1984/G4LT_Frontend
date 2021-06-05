import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createTopTabNavigator } from '@react-navigation/Top-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  ReservationNavigator,
  DiscoverNavigator,
  CreatepostNavigator,
  ChatNavigator,
} from './stack-navigators';

const Tab = createBottomTabNavigator();
// const Tab = createTopTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ size, color }) => {
    let iconName = 'ios-home';
    if (route.name === 'ReservationTab') {
      iconName = 'md-home';
    } else if (route.name === 'CreatepostTab') {
      iconName = 'md-add-circle';
    } else if (route.name === 'ChatTab') {
      iconName = 'md-chatbubbles-outline';
    } else if (route.name === 'DiscoverTab') {
      iconName = 'md-search-sharp';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});
const tabBarOptions = { activeTintColor: '#800080', inactiveTintColor: 'black', tabStyle: { paddingVertical: 40 } };

export const AdminTabNavigator = () => (
  <Tab.Navigator initialRouteName="ReservationTab" screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen name="ReservationTab" component={DiscoverNavigator} />
    <Tab.Screen name="ContactTab" component={DiscoverNavigator} />
    <Tab.Screen name="AboutTab" component={DiscoverNavigator} />
  </Tab.Navigator>
);

export const ClientTabNavigator = () => (
  <Tab.Navigator initialRouteName="ReservationTab" screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
    <Tab.Screen name="ReservationTab" options={{ tabBarLabel: '' }} component={ReservationNavigator} />
    <Tab.Screen name="CreatepostTab" options={{ tabBarLabel: ' ' }} component={CreatepostNavigator} />
    <Tab.Screen name="ChatTab" options={{ tabBarLabel: '' }} component={ChatNavigator} />
    <Tab.Screen name="DiscoverTab" options={{ tabBarLabel: '' }} component={DiscoverNavigator} />
  </Tab.Navigator>
);
