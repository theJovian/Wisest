import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigator';
import {Iteration} from './Iteration';
import {ExperiencesScreenProp} from '../Experiences/Experiences.controller';

type IterationRouteType = RouteProp<RootStackParamList, 'Iteration'>;

export const IterationController = () => {
  const navigator = useNavigation<ExperiencesScreenProp>();
  const {params} = useRoute<IterationRouteType>();
  const {iteration, experience} = params;
  useEffect(() => {
    navigator.setOptions({
      title: experience,
    });
  }, [experience, navigator]);

  return <Iteration iteration={iteration} />;
};
