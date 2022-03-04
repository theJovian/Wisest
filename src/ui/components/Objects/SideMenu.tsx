import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  children: Element;
}

export const SideMenu = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
