import {ExperienceService} from '../../../core/application/ExperienceService';
import {useEffect, useState} from 'react';
import {Experience as ExperienceType} from '../../../core/domain/Experience/Experience';
import React from 'react';
import {Experiences} from './Experiences';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const ExperiencesController = () => {
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
  const navigator = useNavigation<StackNavigationProp<any>>();
  const [experiences, setExperiences] = useState<ExperienceType[]>(
    [] as ExperienceType[],
  );
  const loadExperiences = () => {
    ExperienceService.getExperiences().then(exp => setExperiences(exp));
  };
  useEffect(() => {
    loadExperiences();
  }, []);
  return (
    <Experiences
      experiences={experiences}
      onCreateNewExperience={() =>
        navigator.navigate('CreateExperiencesController')
      }
      onDeleteExperience={showPrompt}
    />
  );
};
