import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Iteration as IterationModel} from '../../../../../core/domain/Iteration/Iteration';
import {Step} from '../../../../components/Molecules/Step';
import {Separator} from '../../../../components/Objects/Separator';
import {Score} from '../../../../components/Atoms/Score';
import {light, orange} from '../../../../Styles/globalStyle';

interface Props {
  iteration: IterationModel;
  numberOfItems?: number;
  onPress: () => void;
}

export const IterationPreview = ({
  iteration,
  numberOfItems,
  onPress,
}: Props) => {
  const [isReduced, setIsReduced] = useState(false);
  const nOfItems = useRef(numberOfItems);
  const [items, setItems] = useState(
    iteration.items.slice(0, nOfItems.current),
  );

  useEffect(() => {
    if (
      nOfItems.current === undefined ||
      nOfItems.current > iteration.items.length
    ) {
      nOfItems.current = iteration.items.length;
    } else if (nOfItems.current < iteration.items.length) {
      setIsReduced(true);
    }
    setItems(iteration.items.slice(0, nOfItems.current));
  }, [iteration, nOfItems]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      <Text style={styles.title}>Iteration {iteration.n}:</Text>
      <Separator vertical="small" />
      <Text style={styles.subtitle}>Steps</Text>
      <Separator vertical="small" />
      {items.map((item, index) => {
        return <Step key={item.text + index} item={item} size="small" />;
      })}
      {isReduced && <Text>...</Text>}
      <View style={{flex: 1}} />
      <Image source={{uri: iteration.image}} style={styles.image} />
      <View style={{flex: 1}} />
      <View style={styles.score}>
        <Score score={iteration.score} size="small" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 30,
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
  score: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
