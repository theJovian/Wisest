import {View} from 'react-native';
import React from 'react';

type Size = 'small' | 'medium' | 'big';

interface Props {
  vertical?: Size;
  horizontal?: Size;
}

export const Separator = ({
  vertical = 'medium',
  horizontal = 'medium',
}: Props) => {
  const sizes = {
    small: 10,
    medium: 25,
    big: 40,
  };
  return (
    <View
      style={{
        height: sizes[vertical],
        width: sizes[horizontal],
      }}
    />
  );
};
