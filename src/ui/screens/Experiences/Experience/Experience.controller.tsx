import {Experience} from './Experience';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/Navigator';

type ExperienceRouteType = RouteProp<RootStackParamList, 'Experience'>;

export const ExperienceController = () => {
  const {params} = useRoute<ExperienceRouteType>();
  const {experience} = params;
  return <Experience experience={experience} />;
};
