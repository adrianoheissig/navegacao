import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        // tabBarShowLabel: false,
        // tabBarLabelStyle: {fontSize: 30},
      }}
      initialRouteName="TelaB">
      <Tab.Screen
        name="TelaA"
        component={TelaA}
        options={{
          title: 'Inicio',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={
                focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen name="TelaB" component={TelaB} />
      <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
  );
};
