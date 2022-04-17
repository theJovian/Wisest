import React, {useContext, useState} from 'react';
import {Login} from './Login';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserService} from '../../../../core/application/UserService';
import {RootStackParamList} from '../../../navigation/Navigator';
import {UserContext} from '../../../Context/UserContext';

type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const LoginController = () => {
  const [hasFailedLogin, setHasFailedLogin] = useState(false);
  const navigator = useNavigation<LoginScreenProp>();

  const handleLogin = async () => {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    const user = await UserService.getUser('asd');
    if (user) {
      console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
      // console.log(JSON.stringify(user, null, 5));
      navigator.navigate('Experiences');
    } else {
      setHasFailedLogin(true);
    }
  };
  return <Login handleLogin={handleLogin} hasFailedLogin={hasFailedLogin} />;
};
