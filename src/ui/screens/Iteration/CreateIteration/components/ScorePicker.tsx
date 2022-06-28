import React, {useState} from 'react';
import {SmallButton} from '../../../../components/Atoms/SmallButton';
import {scoreColors} from '../../../../Styles/globalStyle';
import {StyleSheet, View} from 'react-native';

interface Props {
  onPress: (note: number) => void;
}

export const ScorePicker = ({onPress}: Props) => {
  const [isSelected, setIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const select = (index: number) => {
    const newState = Array(10).fill(false);
    newState[index] = true;
    return newState;
  };

  return (
    <View style={styles.score}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((note, index) => (
        <SmallButton
          text={note.toString()}
          // @ts-ignore
          borderColor={scoreColors[note]}
          // @ts-ignore
          backgroundColor={isSelected[index] ? scoreColors[note] : undefined}
          onPress={() => {
            setIsSelected(select(index));
            onPress(note);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
