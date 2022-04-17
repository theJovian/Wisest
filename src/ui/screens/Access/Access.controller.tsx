import React from 'react';
import {Access} from './Access';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type AccessScreenProp = StackNavigationProp<RootStackParamList, 'Access'>;

export const AccessController = () => {
  const navigator = useNavigation<AccessScreenProp>();

  const onLogin = () => {
    navigator.navigate('Login');
  };

  const onRegister = () => {
    navigator.navigate('Register');
  };

  return <Access onLogin={onLogin} onRegister={onRegister} />;
};
