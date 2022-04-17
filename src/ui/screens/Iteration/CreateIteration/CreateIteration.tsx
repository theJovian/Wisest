import {FieldArray, Formik} from 'formik';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../../components/Atoms/Separator';
import {StandardButton} from '../../../components/Objects/StandardButton';
import {TestButtons} from './components/TestButtons';
import {AddDeleteButtons} from './components/AddDeleteButtons';
import {TextAreaItem} from '../../../components/Molecules/TextAreaItem';
import {TextInputItem} from '../../../components/Molecules/TextInputItem';
import {ScorePicker} from './components/ScorePicker';
import {launchCamera} from 'react-native-image-picker';
import {IterationFormikData} from './CreateIteration.controller';
import {red} from '../../../Styles/globalStyle';

interface Props {
  n: number;
  onSubmit: (values: IterationFormikData) => void;
  experienceId: number;
  error: string;
}

export const CreateIteration = ({n, onSubmit, experienceId, error}: Props) => {
  const [isBeingTested, setIsBeingTested] = useState(false);
  const [tempUri, setTempUri] = useState('');

  const takePhoto = async (values: any) => {
    const response = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (!response.didCancel && response.assets !== undefined) {
      setTempUri(response.assets[0].uri!);
      values.image = response.assets[0];
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iteration {n}:</Text>
      {isBeingTested && (
        <>
          <Separator vertical="small" />
          <View style={styles.headers}>
            <Text style={styles.subtitle}>Steps</Text>
            <Text style={styles.subtitle}>Rate</Text>
          </View>
        </>
      )}
      <Formik
        initialValues={{
          items: [
            {
              text: '',
              state: 'neutral',
            },
          ],
          notes: '',
          score: 0,
          image: undefined,
          experienceId,
        }}
        onSubmit={values => onSubmit(values)}>
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <View>
            <FieldArray
              name="items"
              render={arrayHelpers => (
                <>
                  {values.items.map((item, index) => (
                    <>
                      {isBeingTested ? (
                        <View style={styles.items}>
                          <Text>- {item.text}</Text>
                          <TestButtons
                            onPositivePress={() => (item.state = 'positive')}
                            onNegativePress={() => (item.state = 'negative')}
                          />
                        </View>
                      ) : (
                        <View style={styles.form}>
                          <TextInputItem
                            onChangeText={handleChange(`items[${index}].text`)}
                            onBlur={handleBlur(`items[${index}].text`)}
                            value={values.items[index].text}
                            placeholder={`Step ${index + 1}`}
                          />
                        </View>
                      )}
                    </>
                  ))}
                  {!isBeingTested && (
                    <AddDeleteButtons
                      onAdd={() =>
                        arrayHelpers.push({text: '', state: 'neutral'})
                      }
                      onDelete={() => arrayHelpers.pop()}
                    />
                  )}
                </>
              )}
            />
            {isBeingTested ? (
              <View>
                <Separator />
                <Text style={styles.subtitle}>Notes</Text>
                <TextAreaItem
                  onChangeText={handleChange('notes')}
                  onBlur={handleBlur('notes')}
                  value={values.notes}
                  placeholder="notes"
                />
                <Separator />
                <View style={styles.testButton}>
                  <StandardButton
                    title="Take a photo"
                    onPress={() => takePhoto(values)}
                  />
                </View>
                {tempUri.length > 0 && (
                  <Image source={{uri: tempUri}} style={styles.image} />
                )}
                <Text style={styles.subtitle}>Score</Text>
                <ScorePicker onPress={note => (values.score = note)} />
                {error.length > 0 && (
                  <View>
                    <Text style={styles.error}>{error}</Text>
                  </View>
                )}
                <View style={styles.testButton}>
                  <StandardButton title="Save" onPress={handleSubmit} />
                </View>
              </View>
            ) : (
              <View style={styles.testButton}>
                <StandardButton
                  title="Test It!"
                  onPress={() => setIsBeingTested(true)}
                />
              </View>
            )}
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
  testButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  items: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 300,
  },
  error: {
    color: red,
    fontSize: 18,
  },
  headers: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
