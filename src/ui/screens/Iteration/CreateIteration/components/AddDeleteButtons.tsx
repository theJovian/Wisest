import React from 'react';
import {SmallButton} from '../../../../components/Atoms/SmallButton';
import {Separator} from '../../../../components/Objects/Separator';
import {StyleSheet, View} from 'react-native';
import {dark, light} from '../../../../Styles/globalStyle';

interface Props {
  onAdd: () => void;
  onDelete: () => void;
}

export const AddDeleteButtons = ({onAdd, onDelete}: Props) => {
  return (
    <View style={styles.buttons}>
      <SmallButton
        onPress={onAdd}
        icon="add-outline"
        backgroundColor={dark}
        color={light}
      />
      <Separator horizontal="medium" />
      <SmallButton
        onPress={onDelete}
        icon="remove-outline"
        backgroundColor={dark}
        color={light}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
});
