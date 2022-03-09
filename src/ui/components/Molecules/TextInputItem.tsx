import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import React, {ChangeEvent} from 'react';

interface Props {
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  placeholder: string;
}

export const TextInputItem = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
}: Props) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      style={styles.input}
      underlineColorAndroid="grey"
      placeholder={placeholder}
      maxLength={50}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 425,
  },
});
