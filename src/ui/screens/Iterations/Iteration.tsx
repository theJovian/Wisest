import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Iteration as IterationModel} from '../../../core/domain/Iteration/Iteration';
import {Item} from './Item';
import {Separator} from '../../components/Atoms/Separator';
import {Score} from './Score';

interface Props {
  iteration: IterationModel;
  numberOfItems?: number;
}

export const Iteration = ({iteration, numberOfItems = 0}: Props) => {
  if (numberOfItems > iteration.items.length) {
    numberOfItems = 0;
  }
  iteration.items = iteration.items.slice(numberOfItems);
  console.log(JSON.stringify(iteration.items, null, 5));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iteration {iteration.n}:</Text>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Steps</Text>
      <Separator vertical="small" />
      {iteration.items.map(item => {
        return <Item item={item} />;
      })}
      <Separator vertical="small" />
      <Score score={iteration.score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
