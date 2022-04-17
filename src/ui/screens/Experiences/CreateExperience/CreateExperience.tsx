import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {StandardButton} from '../../../components/Objects/StandardButton';
import {TextForm} from '../../../components/Objects/TextForm';
import {Separator} from '../../../components/Atoms/Separator';

const height = Dimensions.get('window').height;

interface props {
  onCreate: any;
}

export const CreateExperience = ({onCreate}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Experience</Text>
      <Formik
        initialValues={{name: '', description: ''}}
        onSubmit={values => {
          const experience = {
            name: values.name,
            description: values.description,
            user_id: 1,
          };
          onCreate(experience);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.container}>
            <TextForm
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              type="textInput"
            />
            <Separator />
            <TextForm
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              title="Description"
              type="textArea"
            />
            <Separator />
            <View style={{flex: 1}} />
            <View style={styles.button}>
              <StandardButton onPress={handleSubmit} title="Create" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginVertical: 50,
  },
});
