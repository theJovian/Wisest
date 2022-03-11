import {DeleteExperiences} from './DeleteExperiences';
import prompt from 'react-native-prompt-android';
import {RootStackParamList} from '../../../navigation/Navigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';

type DeleteExperiencesRouteType = RouteProp<
  RootStackParamList,
  'DeleteExperiences'
>;

export const DeleteExperiencesController = () => {
  const {params} = useRoute<DeleteExperiencesRouteType>();
  const {experiences} = params;
  const showPrompt = () => {
    // Alert.prompt(
    //   'Esta seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'plain-text',
    //   'Hola Mundo',
    //   'number-pad',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <DeleteExperiences
      experiences={experiences}
      onDeleteExperience={showPrompt}
    />
  );
};
