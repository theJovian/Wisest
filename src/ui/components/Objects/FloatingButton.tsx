import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {brandColor} from '../../Styles/globalStyle';

interface Props {
  onPress: () => void;
}

export const FloatingButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.floatingMenu} onPress={onPress}>
      <View>
        <Icon name="grid-outline" size={35} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingMenu: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
