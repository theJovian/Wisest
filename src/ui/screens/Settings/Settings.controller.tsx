import React, {useContext} from 'react';
import {Settings} from './Settings';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {UserContext} from '../../Context/UserContext';
import {useNavigation} from '@react-navigation/native';
import {UserService} from '../../../core/application/UserService';
import prompt from 'react-native-prompt-android';

export type SettingsScreenProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

export const SettingsController = () => {
  const {user, setUser} = useContext(UserContext);
  const navigator = useNavigation<SettingsScreenProp>();

  const logout = async () => {
    const response = await UserService.logout();
    console.log(response);
    if (response.status === 'ok') {
      setUser(undefined);
      navigator.navigate('SplashScreen');
    }
  };

  const _delete = async (password: string) => {
    const response = await UserService.deleteUser(
      user!.id,
      user!.email,
      password,
    );
    console.log(response);
    setUser(undefined);
    navigator.navigate('SplashScreen');
  };

  const showPrompt = () => {
    prompt(
      'Confirm Deletion',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: _delete,
          style: 'default',
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'Password',
      },
    );
  };

  return <Settings onLogout={logout} onDelete={showPrompt} />;
};
