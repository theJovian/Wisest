import React from 'react';
import {Iteration as IterationModel} from '../../../core/domain/Iteration/Iteration';
import {StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../components/Atoms/Separator';
import {Item} from './Item';
import {Score} from './Score';

interface Props {
  iteration: IterationModel;
}

export const Iteration = ({iteration}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iteration {iteration.n}:</Text>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Steps</Text>
      <Separator vertical="small" />
      <View style={styles.items}>
        {iteration.items.map(item => {
          return <Item item={item} />;
        })}
      </View>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Notes</Text>
      <Text>{iteration.notes}</Text>
      <View style={{flex: 1}} />
      <View style={styles.score}>
        <Score score={iteration.score} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  items: {
    paddingHorizontal: 10,
  },
  score: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
