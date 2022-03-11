import {ExperienceService} from '../../../core/application/ExperienceService';
import {useEffect, useState} from 'react';
import {Experience as ExperienceType} from '../../../core/domain/Experience/Experience';
import React from 'react';
import {Experiences} from './Experiences';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';

type ExperiencesScreenProp = StackNavigationProp<
  RootStackParamList,
  'Experiences'
>;

export const ExperiencesController = () => {
  const navigator = useNavigation<ExperiencesScreenProp>();
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
      onCreateNewExperience={() => navigator.navigate('CreateExperience')}
      onDeleteExperience={() =>
        navigator.navigate('DeleteExperiences', {experiences})
      }
    />
  );
};
