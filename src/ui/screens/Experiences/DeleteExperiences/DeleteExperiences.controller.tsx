import {DeleteExperiences} from './DeleteExperiences';
import {RootStackParamList} from '../../../navigation/Navigator';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert} from 'react-native';
import {ExperienceService} from '../../../../core/application/ExperienceService';
import {useMutation, useQueryClient} from 'react-query';

type DeleteExperiencesRouteType = RouteProp<
  RootStackParamList,
  'DeleteExperiences'
>;

export type trashItem = {
  id: number;
  value: boolean;
};

export interface FormikValues {
  state: {
    trash: trashItem[];
  };
}

export const DeleteExperiencesController = () => {
  const queryClient = useQueryClient();
  const navigator = useNavigation();

  const {params} = useRoute<DeleteExperiencesRouteType>();
  const {experiences} = params;

  const confirmDelete = (values: FormikValues) => {
    const items = values.state.trash
      .filter(item => item.value)
      .map(trashItem => trashItem.id);
    const trash = {trash: items};
    return ExperienceService.deleteExperiences(trash);
  };

  const {mutate} = useMutation(confirmDelete, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('experiences');
    },
    onSettled: () => {
      navigator.goBack();
    },
  });

  const showPrompt = (onSubmit: () => void) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete the selected items?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: onSubmit,
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <DeleteExperiences
      experiences={experiences}
      onDeleteExperience={showPrompt}
      onConfirmDeleteExperience={mutate}
    />
  );
};
