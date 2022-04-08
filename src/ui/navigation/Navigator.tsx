import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginController} from '../screens/Login/Login.controller';
import {ExperiencesController} from '../screens/Experiences/Experiences.controller';
import {CreateExperienceController} from '../screens/Experiences/CreateExperience/CreateExperience.controller';
import {DeleteExperiencesController} from '../screens/Experiences/DeleteExperiences/DeleteExperiences.controller';
import {Experience} from '../../core/domain/Experience/Experience';
import {ExperienceController} from '../screens/Experiences/Experience/Experience.controller';

export type RootStackParamList = {
  Login: undefined;
  CreateExperience: undefined;
  DeleteExperiences: {
    experiences: Experience[];
  };
  Experiences: undefined;
  Experience: {
    experience: Experience;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginController} />
      <Stack.Screen
        name="CreateExperience"
        component={CreateExperienceController}
      />
      <Stack.Screen
        name="DeleteExperiences"
        component={DeleteExperiencesController}
      />
      <Stack.Screen name="Experiences" component={ExperiencesController} />
      <Stack.Screen name="Experience" component={ExperienceController} />
    </Stack.Navigator>
  );
};
