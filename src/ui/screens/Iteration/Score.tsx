import React from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
  score: number;
}

export const Score = ({score}: Props) => {
  return (
    <View>
      <Progress.Circle
        color="#080000"
        borderColor="#080000"
        size={60}
        indeterminate={false}
        progress={score / 10}
        showsText
        formatText={() => `${score.toString()}/10`}
        textStyle={{fontSize: 16}}
        thickness={6}
      />
    </View>
  );
};
