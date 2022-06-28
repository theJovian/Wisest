import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {brandColor} from '../../Styles/globalStyle';
import {Separator} from '../Objects/Separator';

interface Props {
  onPress: () => void;
  icon?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  text?: string;
}

export const SmallButton = ({
  onPress,
  icon,
  color,
  backgroundColor,
  borderColor,
  text,
}: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor, borderColor}}
      onPress={onPress}>
      <View style={styles.content}>
        {icon && <Icon name={icon} size={20} color={color} />}
        {text && <Text style={{color}}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: brandColor,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: brandColor,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
