import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginController} from '../screens/Login/Login.controller';
import {ExperiencesController} from '../screens/Experience/Experiences.controller';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginController" component={LoginController} />
      <Stack.Screen
        name="ExperiencesController"
        component={ExperiencesController}
      />
    </Stack.Navigator>
  );
};
