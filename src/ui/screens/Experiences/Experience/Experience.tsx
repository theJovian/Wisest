import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Experience as ExperienceModel} from '../../../../core/domain/Experience/Experience';
import {IterationPreview} from '../../Iteration/IterationPreview';
import {Iteration as IterationModel} from '../../../../core/domain/Iteration/Iteration';

interface Props {
  experience: ExperienceModel;
  iterations: IterationModel[];
  onPress: (iteration: IterationModel) => void;
}

export const Experience = ({experience, iterations, onPress}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{experience.name}</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={iterations}
          renderItem={({item}) => (
            <IterationPreview
              iteration={item}
              onPress={() => onPress(item)}
              numberOfItems={5}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carousel: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    marginTop: 50,
  },
});
