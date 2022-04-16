import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SmallButton} from '../../../../components/Objects/SmallButton';
import {Separator} from '../../../../components/Atoms/Separator';
import {green, red} from '../../../../Styles/globalStyle';

interface Props {
  onPositivePress: () => void;
  onNegativePress: () => void;
}

export const TestButtons = ({onPositivePress, onNegativePress}: Props) => {
  const [state, setState] = useState('neutral');
  return (
    <View style={styles.state}>
      <SmallButton
        icon="checkmark-outline"
        color={state === 'positive' ? green : 'black'}
        borderColor={state === 'positive' ? green : 'black'}
        onPress={() => {
          setState('positive');
          onPositivePress();
        }}
      />
      <Separator horizontal="small" />
      <SmallButton
        icon="remove-outline"
        color={state === 'negative' ? red : 'black'}
        borderColor={state === 'negative' ? red : 'black'}
        onPress={() => {
          setState('negative');
          onNegativePress();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  state: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
