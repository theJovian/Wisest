import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  score: number;
}

export const Score = ({score}: Props) => {
  return (
    <View>
      <Text>{score}</Text>
    </View>
  );
};
