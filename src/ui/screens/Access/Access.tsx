import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {StandardButton} from '../../components/Objects/StandardButton';
import {Separator} from '../../components/Atoms/Separator';
import {dark, light} from '../../Styles/globalStyle';

interface Props {
  onLogin: () => void;
  onRegister: () => void;
}

export const Access = ({onLogin, onRegister}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../_assets/simplified_logo.png')}
        style={styles.image}
      />
      <Separator />
      <StandardButton title="Login" onPress={onLogin} />
      <Separator />
      <StandardButton
        title="Register"
        onPress={onRegister}
        backgroundColor={light}
        color={dark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
