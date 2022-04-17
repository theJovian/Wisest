import React from 'react';
import {Iteration as IterationModel} from '../../../core/domain/Iteration/Iteration';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../components/Atoms/Separator';
import {Item} from './Item';
import {Score} from './Score';
import {dark} from '../../Styles/globalStyle';

interface Props {
  iteration: IterationModel;
}

export const Iteration = ({iteration}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iteration {iteration.n}:</Text>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Steps</Text>
      <Separator vertical="small" />
      <View style={styles.items}>
        {iteration.items.map(item => {
          return <Item item={item} size="big" />;
        })}
      </View>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Notes</Text>
      <Separator />
      <Text style={styles.notes}>{iteration.notes}</Text>
      <Image source={{uri: iteration.image}} style={styles.image} />
      <View style={styles.score}>
        <Score score={iteration.score} size="big" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: dark,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '600',
    color: dark,
  },
  items: {
    paddingHorizontal: 10,
  },
  score: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 50,
  },
  notes: {
    fontSize: 18,
    textAlign: 'justify',
  },
});
