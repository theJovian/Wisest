import React, {useContext, useState} from 'react';
import {Register} from './Register';
import {UserService} from '../../../../core/application/UserService';
import {UserContext} from '../../../Context/UserContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/Navigator';
import {Response} from '../../../../core/infraestructure/Firebase/Firebase';
import {User} from '../../../../core/domain/User/User';

export interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

type AccessScreenProp = StackNavigationProp<RootStackParamList, 'Access'>;

enum Errors {
  EMPTY_FIELDS = 'You must fill all the fields',
  PASSWORDS = 'Your passwords do not match',
}

export const RegisterController = () => {
  const navigator = useNavigation<AccessScreenProp>();
  const {setUser} = useContext(UserContext);
  const [error, setError] = useState('');

  const register = async (values: RegisterFormValues) => {
    if (
      values.username.length === 0 ||
      values.email.length === 0 ||
      values.password.length === 0 ||
      values.confirmPassword.length === 0
    ) {
      setError(Errors.EMPTY_FIELDS);
    } else if (values.password !== values.confirmPassword) {
      setError(Errors.PASSWORDS);
    } else {
      const response = await UserService.register(
        values.email,
        values.password,
        values.username,
      );
      if ((response as Response).status !== undefined) {
        setError((response as Response).message);
      } else {
        setUser(response as User);
        navigator.navigate('Experiences');
      }
    }
  };

  return <Register onSubmit={register} error={error} />;
};
