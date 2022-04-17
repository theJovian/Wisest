import React, {useContext, useState} from 'react';
import {Login} from './Login';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserService} from '../../../../core/application/UserService';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Response} from '../../../../core/infraestructure/Firebase/Firebase';
import {User} from '../../../../core/domain/User/User';
import {UserContext} from '../../../Context/UserContext';

type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export interface LoginFormValues {
  email: string;
  password: string;
}

enum Errors {
  EMPTY_FIELDS = 'You must fill email and password',
}

export const LoginController = () => {
  const navigator = useNavigation<LoginScreenProp>();
  const [error, setError] = useState('');
  const {setUser} = useContext(UserContext);

  const handleLogin = async (values: LoginFormValues) => {
    if (values.email.length === 0 || values.password.length === 0) {
      setError(Errors.EMPTY_FIELDS);
    } else {
      const response = await UserService.login(values.email, values.password);
      if ((response as Response).status !== undefined) {
        setError((response as Response).message);
      } else {
        setUser(response as User);
        navigator.navigate('Experiences');
      }
    }
  };
  return <Login onSubmit={handleLogin} error={error} />;
};
