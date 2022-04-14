import React from 'react';
import {
  Item as ItemModel,
  State,
} from '../../../core/domain/Iteration/Iteration';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  item: ItemModel;
}

export const Item = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text>- {item.text}</Text>
      <Icon name={getIcon(item.state)} size={20} />
    </View>
  );
};

const getIcon = (state: State) =>
  state === 'positive' ? 'checkmark-circle-outline' : 'remove-circle-outline';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
