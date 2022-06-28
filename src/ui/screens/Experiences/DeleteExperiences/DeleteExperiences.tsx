import {ExperienceItem} from '../../../components/Molecules/ExperienceItem';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useReducer} from 'react';
import {Experience} from '../../../../core/domain/Experience/Experience';
import {Separator} from '../../../components/Objects/Separator';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import {FormikValues, trashItem} from './DeleteExperiences.controller';
import {red} from '../../../Styles/globalStyle';

interface Props {
  experiences: Experience[];
  onDeleteExperience: (onSubmit: () => void) => void;
  onConfirmDeleteExperience: (values: FormikValues) => void;
}

const screenWidth = Dimensions.get('window').width;

type action = {
  type: 'check';
  id: number;
};

type state = {
  trash: trashItem[];
};

const reducer = (state: state, action: action) => {
  switch (action.type) {
    case 'check':
      return {
        trash: state.trash.map(item => {
          if (item.id === action.id) {
            item.value = !item.value;
          }
          return item;
        }),
      };
  }
};

export const DeleteExperiences = ({
  experiences,
  onDeleteExperience,
  onConfirmDeleteExperience,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    trash: experiences.map(experience => ({
      id: experience.id,
      value: false,
    })),
  });
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          state,
        }}
        onSubmit={onConfirmDeleteExperience}>
        {({values, handleSubmit}) => (
          <FlatList
            contentContainerStyle={styles.list}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.title}>Delete My Experiences</Text>
                <TouchableOpacity
                  onPress={() => onDeleteExperience(handleSubmit)}>
                  <Text style={styles.deleteButton}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={() => <Separator vertical="big" />}
            showsVerticalScrollIndicator={false}
            data={experiences}
            renderItem={({item, index}) => (
              <View style={styles.element}>
                <ExperienceItem experience={item} width="82%" disabled />
                <Separator />
                <CheckBox
                  value={values.state.trash[index].value}
                  onValueChange={() =>
                    dispatch({
                      type: 'check',
                      id: values.state.trash[index].id,
                    })
                  }
                />
              </View>
            )}
          />
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  header: {
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    color: red,
    fontSize: 18,
  },
});
