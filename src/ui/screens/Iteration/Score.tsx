import React from 'react';
import {Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {dark, scoreColors} from '../../Styles/globalStyle';

interface Props {
  score: number;
  size: 'big' | 'small';
}

export const Score = ({score, size}: Props) => {
  return (
    <View>
      <Progress.Circle
        // @ts-ignore
        color={scoreColors[score]}
        borderColor={dark}
        borderWidth={size === 'big' ? 1.5 : 1}
        size={size === 'big' ? 70 : 55}
        indeterminate={false}
        progress={score / 10}
        showsText
        formatText={() => `${score.toString()}/10`}
        textStyle={{
          fontSize: size === 'big' ? 18 : 15,
          color: dark,
          fontWeight: size === 'big' ? '600' : 'normal',
        }}
        thickness={size === 'big' ? 10 : 6}
      />
    </View>
  );
};
