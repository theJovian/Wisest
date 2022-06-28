import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Separator} from '../Objects/Separator';

interface Props {
  icon: string;
  label: string;
  onPress: () => void;
}

export const SideItem = ({icon, label, onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <Icon name={icon} size={30} color="black" />
      <Separator horizontal="small" vertical="small" />
      <Text style={styles.option}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    backgroundColor: 'white',
    width: 155,
    height: 50,
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 20,
  },
  option: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
