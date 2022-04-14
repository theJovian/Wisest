import {FieldArray, Formik} from 'formik';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextForm} from '../../../components/Objects/TextForm';
import {SmallButton} from '../../../components/Objects/SmallButton';
import {Separator} from '../../../components/Atoms/Separator';
import {StandardButton} from '../../../components/Objects/StandardButton';

interface Props {
  n: number;
}

export const CreateIteration = ({n}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iteration {n}:</Text>
      <Formik
        initialValues={{items: ['']}}
        onSubmit={() => console.log('submit madafaka!!!')}>
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <View>
            <FieldArray
              name="items"
              render={arrayHelpers => (
                <>
                  {values.items.map((item, index) => (
                    <View style={styles.form}>
                      <TextForm
                        key={index}
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        value={values.items[index]}
                        title={`Step ${index + 1}`}
                        type="textInput"
                      />
                    </View>
                  ))}
                  <View style={styles.buttons}>
                    <SmallButton
                      onPress={() => arrayHelpers.push('')}
                      icon="add-outline"
                    />
                    <Separator horizontal="medium" />
                    <SmallButton
                      onPress={() => arrayHelpers.pop()}
                      icon="remove-outline"
                    />
                  </View>
                </>
              )}
            />
            <View style={styles.testButton}>
              <StandardButton title="Test It!" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
      <Separator vertical="big" />
      <Separator vertical="big" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  form: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  testButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
