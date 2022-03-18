import {ExperienceService} from '../../../core/application/ExperienceService';
import React from 'react';
import {Experiences} from './Experiences';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {useQuery} from 'react-query';

type ExperiencesScreenProp = StackNavigationProp<
  RootStackParamList,
  'Experiences'
>;

export const ExperiencesController = () => {
  const navigator = useNavigation<ExperiencesScreenProp>();
  const loadExperiences = () => {
    return ExperienceService.getExperiences();
  };
  const {data: experiences} = useQuery('experiences', loadExperiences);

  return (
    <Experiences
      experiences={experiences ?? []}
      onCreateNewExperience={() => navigator.navigate('CreateExperience')}
      onDeleteExperience={() =>
        navigator.navigate('DeleteExperiences', {
          experiences: experiences ?? [],
        })
      }
    />
  );
};
