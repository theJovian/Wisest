import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {brandColor} from '../../Styles/globalStyle';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../_assets/logo.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: brandColor,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
