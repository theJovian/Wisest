import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Experience as ExperienceModel} from '../../../../core/domain/Experience/Experience';
import {Separator} from '../../../components/Atoms/Separator';
import {ExperienceItem} from '../ExperienceItem';
import {IterationItem} from './IterationItem';

interface Props {
  experience: ExperienceModel;
}

export const Experience = ({experience}: Props) => {
  console.log('from experience');
  console.log(JSON.stringify(experience, null, 5));
  const iterations = [
    {n: 1, title: 'title1'},
    {n: 2, title: 'title2'},
    {n: 2, title: 'title2'},
    {n: 2, title: 'title2'},
    {n: 2, title: 'title2'},
    {n: 2, title: 'title2'},
  ];
  return (
    <View>
      <Text style={styles.title}>{experience.name}</Text>
      <View style={styles.carousel}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={iterations}
          renderItem={({item}) => <IterationItem />}
          style={{backgroundColor: 'green'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
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
