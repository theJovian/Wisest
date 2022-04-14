import {Experience} from './Experience';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/Navigator';
import {IterationService} from '../../../../core/application/IterationService';
import {useQuery} from 'react-query';

type ExperienceRouteType = RouteProp<RootStackParamList, 'Experience'>;

export const ExperienceController = () => {
  const {params} = useRoute<ExperienceRouteType>();
  const {experience} = params;

  const loadIterations = (experienceId: number) => {
    return IterationService.getIterations(experienceId);
  };
  const {data: iterations} = useQuery('iterations', () =>
    loadIterations(experience.id),
  );
  return <Experience experience={experience} iterations={iterations ?? []} />;
};
