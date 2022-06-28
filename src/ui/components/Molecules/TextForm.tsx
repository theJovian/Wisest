import {ChangeEvent} from 'react';
import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {TextInputItem} from '../Atoms/TextInputItem';
import {TextAreaItem} from '../Atoms/TextAreaItem';

type type = 'textArea' | 'textInput';

interface Props {
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  title: string;
  type?: type;
}

export const TextForm = ({
  onChangeText,
  onBlur,
  value,
  title,
  type = 'textArea',
}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {type === 'textInput' ? (
        <TextInputItem
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder={title}
        />
      ) : (
        <TextAreaItem
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder={title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});
