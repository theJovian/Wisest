import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {brandColor} from '../../Styles/globalStyle';

interface Props {
  onPress: () => void;
  icon: string;
}

export const FloatingButton = ({onPress, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.floatingMenu} onPress={onPress}>
      <View>
        <Icon name={icon} size={35} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingMenu: {
    borderWidth: 2,
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
