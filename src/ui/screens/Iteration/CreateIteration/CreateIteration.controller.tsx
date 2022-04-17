import React, {useEffect, useState} from 'react';
import {CreateIteration} from './CreateIteration';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/Navigator';
import {ExperiencesScreenProp} from '../../Experiences/Experiences.controller';
import {IterationService} from '../../../../core/application/IterationService';
import {Asset} from 'react-native-image-picker';
import {useMutation, useQueryClient} from 'react-query';

type IterationRouteType = RouteProp<RootStackParamList, 'CreateIteration'>;

export interface IterationFormData {
  items: {
    text: string;
    state: string;
  }[];
  notes: string;
  score: number;
  experienceId: number;
}

export interface IterationFormikData {
  items: {
    text: string;
    state: string;
  }[];
  notes: string;
  score: number;
  image: Asset;
  experienceId: number;
}

const genericError = 'Steps must be rated and score must be selected';

export const CreateIterationController = () => {
  const {params} = useRoute<IterationRouteType>();
  const {n, experience, experienceId} = params;
  const navigator = useNavigation<ExperiencesScreenProp>();
  const [error, setError] = useState('');
  const queryClient = useQueryClient();

  useEffect(() => {
    navigator.setOptions({
      title: experience,
    });
  }, [experience, navigator]);

  const onSubmit = async (values: IterationFormikData) => {
    setError('');
    if (
      values.items.some(item => item.state === 'neutral') ||
      values.score === 0
    ) {
      setError(genericError);
      throw new Error(genericError);
    }

    const iteration = {
      n,
      items: values.items,
      notes: values.notes,
      score: values.score,
      experienceId: values.experienceId,
    };

    const [data, status] = await IterationService.createIteration(iteration);
    if (status === 200) {
      const imageToUpload = {
        uri: values.image.uri,
        type: values.image.type,
        name: values.image.fileName,
      };
      await IterationService.uploadPhoto(imageToUpload, data.id);
    }
  };

  const {mutate} = useMutation(onSubmit, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('iterations');
      navigator.goBack();
    },
  });

  return (
    <CreateIteration
      n={n}
      onSubmit={mutate}
      experienceId={experienceId}
      error={error}
    />
  );
};
