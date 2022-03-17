import {DeleteExperiences} from './DeleteExperiences';
import {RootStackParamList} from '../../../navigation/Navigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Alert} from 'react-native';
import {ExperienceService} from '../../../../core/application/ExperienceService';

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
  const {params} = useRoute<DeleteExperiencesRouteType>();
  const {experiences} = params;
  const confirmDelete = (values: FormikValues) => {
    console.log(JSON.stringify(values, null, 5));
    const items = values.state.trash
      .filter(item => item.value)
      .map(trashItem => trashItem.id);
    console.log(JSON.stringify(items, null, 5));
    const trash = {trash: items};
    ExperienceService.deleteExperiences(trash).then(response =>
      console.log(response),
    );
  };
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
      onConfirmDeleteExperience={confirmDelete}
    />
  );
};
