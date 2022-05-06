import {
  Dimensions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import React, {ChangeEvent} from 'react';

const width = Dimensions.get('window').width;

interface Props {
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  placeholder: string;
}

export const TextAreaItem = ({
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
      maxLength={750}
      multiline
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: width - 50,
    fontSize: 18,
  },
});
