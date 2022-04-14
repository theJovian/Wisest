import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Experience as ExperienceModel} from '../../../../core/domain/Experience/Experience';
import {Iteration} from '../../Iterations/Iteration';
import {Iteration as IterationModel} from '../../../../core/domain/Iteration/Iteration';

interface Props {
  experience: ExperienceModel;
  iterations: IterationModel[];
}

export const Experience = ({experience, iterations}: Props) => {
  console.log('from experience');
  console.log(JSON.stringify(experience, null, 5));
  // const iterations = [
  //   {n: 1, title: 'title1'},
  //   {n: 2, title: 'title2'},
  //   {n: 2, title: 'title2'},
  //   {n: 2, title: 'title2'},
  //   {n: 2, title: 'title2'},`
  //   {n: 2, title: 'title2'},
  // ];
  return (
    <View>
      <Text style={styles.title}>{experience.name}</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={iterations}
          renderItem={({item}) => <Iteration iteration={item} />}
          style={{backgroundColor: 'green'}}
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
    backgroundColor: 'red',
    marginTop: 50,
  },
});
