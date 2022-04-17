import React, {useContext} from 'react';
import {Settings} from './Settings';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {UserContext} from '../../Context/UserContext';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {UserService} from '../../../core/application/UserService';

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

  const _delete = async () => {
    await auth().currentUser?.delete();
    console.log('current userId ', user!.id);
    const response = await UserService.deleteUser(user!.id);
    console.log(response);
    setUser(undefined);
    navigator.navigate('SplashScreen');
  };

  return <Settings onLogout={logout} onDelete={_delete} />;
};
