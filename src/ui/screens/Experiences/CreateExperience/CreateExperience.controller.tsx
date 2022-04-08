import React from 'react';
import {CreateExperience} from './CreateExperience';
import {useMutation, useQueryClient} from 'react-query';
import {ExperienceService} from '../../../../core/application/ExperienceService';
import {useNavigation} from '@react-navigation/native';

export const CreateExperienceController = () => {
  const navigator = useNavigation();
  const queryClient = useQueryClient();
  const {mutate} = useMutation(ExperienceService.createExperience, {
    onSuccess: () => {
      queryClient.invalidateQueries('experiences');
    },
    onSettled: () => {
      navigator.goBack();
    },
  });
  return <CreateExperience onCreate={mutate} />;
};
