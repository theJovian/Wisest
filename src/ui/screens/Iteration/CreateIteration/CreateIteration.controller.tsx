import React, {useEffect} from 'react';
import {CreateIteration} from './CreateIteration';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/Navigator';
import {ExperiencesScreenProp} from '../../Experiences/Experiences.controller';

type IterationRouteType = RouteProp<RootStackParamList, 'CreateIteration'>;

export const CreateIterationController = () => {
  const {params} = useRoute<IterationRouteType>();
  const {n, experience} = params;
  const navigator = useNavigation<ExperiencesScreenProp>();

  useEffect(() => {
    navigator.setOptions({
      title: experience,
    });
  }, [experience, navigator]);

  return <CreateIteration n={n} />;
};
