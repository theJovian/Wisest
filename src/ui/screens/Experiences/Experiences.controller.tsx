import {ExperienceService} from '../../../core/application/ExperienceService';
import React, {useContext} from 'react';
import {Experiences} from './Experiences';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Navigator';
import {useQuery} from 'react-query';
import {Experience} from '../../../core/domain/Experience/Experience';
import {UserContext} from '../../Context/UserContext';

export type ExperiencesScreenProp = StackNavigationProp<
  RootStackParamList,
  'Experiences'
>;

export const ExperiencesController = () => {
  const {user} = useContext(UserContext);

  const navigator = useNavigation<ExperiencesScreenProp>();
  const loadExperiences = () => {
    return ExperienceService.getExperiences(user!.id);
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
      onSelectExperience={(experience: Experience) =>
        navigator.navigate('Experience', {
          experience,
        })
      }
      onGoToSettings={() => navigator.navigate('Settings')}
    />
  );
};
