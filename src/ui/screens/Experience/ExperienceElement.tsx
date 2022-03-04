import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from '../../Styles/globalStyle';
import {Experience} from '../../../core/domain/Experience/Experience';

interface Props {
  experience: Experience;
}

export const ExperienceElement = ({experience}: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{...styles.subtitle, ...globalStyle.font}}>
        {experience.name}
      </Text>
      <Text>{shorten(experience.description)}</Text>
    </TouchableOpacity>
  );
};

const shorten = (text: string) => {
  const maxLength = 150;
  if (text.length > maxLength) {
    return text.substring(0, 150) + '...';
  }
  return text;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 5,
  },
  container: {
    borderWidth: 1,
    marginVertical: 10,
    height: 140,
    width: 400,
    paddingTop: 5,
    paddingHorizontal: 15,
  },
});
