import React, {useContext, useEffect} from 'react';
import {SplashScreen} from './SplashScreen';
import {UserContext} from '../../Context/UserContext';
import auth from '@react-native-firebase/auth';
import {UserService} from '../../../core/application/UserService';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type SplashScreenProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;

export const SplashScreenController = () => {
  const {setUser} = useContext(UserContext);
  const navigator = useNavigation<SplashScreenProp>();

  // Handle user state changes
  const onAuthStateChanged = async (fireBaseUser: any) => {
    setTimeout(async () => {
      if (fireBaseUser) {
        const user = await UserService.getUser(fireBaseUser.email);
        setUser(user);
        navigator.navigate('Experiences');
      } else {
        navigator.navigate('Access');
      }
    }, 1000);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return <SplashScreen />;
};
