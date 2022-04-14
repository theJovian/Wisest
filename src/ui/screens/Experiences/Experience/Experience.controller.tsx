import {Experience} from './Experience';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/Navigator';
import {IterationService} from '../../../../core/application/IterationService';
import {useQuery} from 'react-query';
import {Iteration} from '../../../../core/domain/Iteration/Iteration';
import {ExperiencesScreenProp} from '../Experiences.controller';

type ExperienceRouteType = RouteProp<RootStackParamList, 'Experience'>;

export const ExperienceController = () => {
  const {params} = useRoute<ExperienceRouteType>();
  const {experience} = params;
  const navigator = useNavigation<ExperiencesScreenProp>();

  const loadIterations = (experienceId: number) => {
    return IterationService.getIterations(experienceId);
  };

  const {data: iterations} = useQuery('iterations', () =>
    loadIterations(experience.id),
  );

  const onPress = (iteration: Iteration) => {
    navigator.navigate('Iteration', {
      iteration,
      experience: experience.name,
    });
  };
  return (
    <Experience
      experience={experience}
      iterations={iterations ?? []}
      onPress={onPress}
    />
  );
};
