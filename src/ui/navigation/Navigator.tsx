import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginController} from '../screens/Access/Login/Login.controller';
import {ExperiencesController} from '../screens/Experiences/Experiences.controller';
import {CreateExperienceController} from '../screens/Experiences/CreateExperience/CreateExperience.controller';
import {DeleteExperiencesController} from '../screens/Experiences/DeleteExperiences/DeleteExperiences.controller';
import {Experience} from '../../core/domain/Experience/Experience';
import {ExperienceController} from '../screens/Experiences/Experience/Experience.controller';
import {Iteration} from '../../core/domain/Iteration/Iteration';
import {IterationController} from '../screens/Iteration/Iteration.controller';
import {CreateIterationController} from '../screens/Iteration/CreateIteration/CreateIteration.controller';
import {brandColor, dark} from '../Styles/globalStyle';
import {AccessController} from '../screens/Access/Access.controller';
import {RegisterController} from '../screens/Access/Register/Register.controller';

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
  Iteration: {
    iteration: Iteration;
    experience: string;
  };
  CreateIteration: {
    n: number;
    experience: string;
    experienceId: number;
  };
  Access: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Access" component={AccessController} />
      <Stack.Screen name="Login" component={LoginController} />
      <Stack.Screen name="Register" component={RegisterController} />
      <Stack.Screen
        name="CreateExperience"
        component={CreateExperienceController}
      />
      <Stack.Screen
        name="DeleteExperiences"
        component={DeleteExperiencesController}
      />
      <Stack.Screen name="Experiences" component={ExperiencesController} />
      <Stack.Screen
        name="Experience"
        component={ExperienceController}
        options={{
          title: 'My Experiences',
          headerShown: true,
          headerStyle: {
            backgroundColor: brandColor,
          },
          headerTintColor: dark,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Iteration"
        component={IterationController}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: brandColor,
          },
          headerTintColor: dark,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="CreateIteration"
        component={CreateIterationController}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: brandColor,
          },
          headerTintColor: dark,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};
