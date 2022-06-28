import React from 'react';
import {Iteration as IterationModel} from '../../../core/domain/Iteration/Iteration';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../components/Objects/Separator';
import {Step} from '../../components/Molecules/Step';
import {Score} from '../../components/Atoms/Score';
import {dark} from '../../Styles/globalStyle';

interface Props {
  iteration: IterationModel;
}
//TODO use a stack
export const Iteration = ({iteration}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iteration {iteration.n}:</Text>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Steps</Text>
      <Separator vertical="small" />
      <View style={styles.items}>
        {iteration.items.map(item => {
          return <Step item={item} size="big" color={dark} />;
        })}
      </View>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Notes</Text>
      <Separator />
      <Text style={styles.notes}>{iteration.notes}</Text>
      {iteration.image !== null && (
        <Image source={{uri: iteration.image}} style={styles.image} />
      )}
      <Separator vertical="big" />
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
    color: dark,
    fontSize: 18,
    textAlign: 'justify',
  },
});
