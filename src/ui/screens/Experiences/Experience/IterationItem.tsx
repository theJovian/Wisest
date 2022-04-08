import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const IterationItem = () => {
  return (
    <View style={styles.container}>
      <Text>Iteration</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
});
