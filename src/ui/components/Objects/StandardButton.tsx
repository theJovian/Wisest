import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {dark, light} from '../../Styles/globalStyle';

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  color?: string;
}

export const StandardButton = ({
  title,
  onPress,
  backgroundColor = dark,
  color = light,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.button, backgroundColor}}
      activeOpacity={0.8}>
      <Text style={{...styles.title, color}}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    width: 200,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    letterSpacing: 2,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
