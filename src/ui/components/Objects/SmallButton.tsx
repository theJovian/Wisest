import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {brandColor} from '../../Styles/globalStyle';

interface Props {
  onPress: () => void;
  icon: string;
}

export const SmallButton = ({onPress, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={icon} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: brandColor,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
