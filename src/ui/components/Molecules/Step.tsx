import React from 'react';
import {
  Item as ItemModel,
  State,
} from '../../../core/domain/Iteration/Iteration';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {green, red} from '../../Styles/globalStyle';

interface Props {
  item: ItemModel;
  size: 'small' | 'big';
  color?: string;
}

export const Step = ({item, size, color}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.text,
          fontSize: size === 'big' ? 18 : 15,
          color: color ? color : 'grey',
        }}>
        - {item.text}
      </Text>
      <Icon
        name={getIcon(item.state)}
        size={size === 'big' ? 30 : 20}
        color={item.state === 'positive' ? green : red}
      />
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
  text: {
    fontSize: 18,
  },
});
