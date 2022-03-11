import {ExperienceElement} from '../ExperienceElement';
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
import {Separator} from '../../../components/Atoms/Separator';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';

interface Props {
  experiences: Experience[];
  onDeleteExperience: () => void;
}

const screenWidth = Dimensions.get('window').width;

type action = {
  type: 'check';
  id: number;
};

type trashItem = {
  id: number;
  value: boolean;
};

type state = {
  trash: trashItem[];
};

const reducer = (state: state, action: action) => {
  switch (action.type) {
    case 'check':
      return {
        trash: state.trash.map(trashItem => {
          if (trashItem.id === action.id) {
            trashItem.value = !trashItem.value;
          }
          return trashItem;
        }),
      };
  }
};

export const DeleteExperiences = ({experiences, onDeleteExperience}: Props) => {
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
        onSubmit={values => console.log(values)}>
        {({values}) => (
          <FlatList
            contentContainerStyle={styles.list}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.title}>Delete My Experiences</Text>
                <TouchableOpacity onPress={onDeleteExperience}>
                  <Text>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={() => <Separator vertical="big" />}
            showsVerticalScrollIndicator={false}
            data={experiences}
            renderItem={({item, index}) => (
              <View style={styles.element}>
                <ExperienceElement experience={item} width={350} disabled />
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
    paddingTop: 50,
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
});
