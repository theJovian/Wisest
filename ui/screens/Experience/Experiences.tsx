import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {brandColor, globalStyle} from '../../Styles/globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';

export const Experiences = () => {
  return (
    <View style={globalStyle.firstPadding}>
      <Text style={{...styles.title, ...globalStyle.font}}>My Experiences</Text>
      <TouchableOpacity style={styles.floatingButton}>
        <View>
          <Icon name="grid-outline" size={35} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  floatingButton: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
  },
});
