import {FieldArray, Formik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../../components/Atoms/Separator';
import {StandardButton} from '../../../components/Objects/StandardButton';
import {TestButtons} from './components/TestButtons';
import {AddDeleteButtons} from './components/AddDeleteButtons';
import {TextAreaItem} from '../../../components/Molecules/TextAreaItem';
import {TextInputItem} from '../../../components/Molecules/TextInputItem';
import {SmallButton} from '../../../components/Objects/SmallButton';
import {scoreColors} from '../../../Styles/globalStyle';
import {ScorePicker} from './components/ScorePicker';

interface Props {
  n: number;
}

type formikState = 'positive' | 'negative' | 'neutral';

export const CreateIteration = ({n}: Props) => {
  const [isBeingTested, setIsBeingTested] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Iteration {n}:</Text>
      {isBeingTested && (
        <>
          <Separator vertical="small" />
          <Text style={styles.subtitle}>Steps</Text>
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
        }}
        onSubmit={() => console.log('sup nigga')}>
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
                <Text style={styles.subtitle}>Score</Text>
                <ScorePicker onPress={note => (values.score = note)} />
                <View style={styles.testButton}>
                  <StandardButton
                    title="Save"
                    onPress={() => console.log(JSON.stringify(values, null, 5))}
                  />
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
});
