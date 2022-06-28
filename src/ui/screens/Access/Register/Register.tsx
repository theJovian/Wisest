import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {brandColor, dark, red} from '../../../Styles/globalStyle';
import {TextInputItem} from '../../../components/Atoms/TextInputItem';
import {StandardButton} from '../../../components/Atoms/StandardButton';
import {Separator} from '../../../components/Objects/Separator';
import {RegisterFormValues} from './Register.controller';

interface Props {
  onSubmit: (values: RegisterFormValues) => void;
  error: string;
}

export const Register = ({onSubmit, error}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create A New Account!</Text>
      <Separator />
      <Formik
        onSubmit={values => onSubmit(values)}
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}>
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <View style={styles.form}>
            <TextInputItem
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Username"
            />
            <TextInputItem
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            <TextInputItem
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              isSecret
            />
            <TextInputItem
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Confirm Password"
              isSecret
            />
            <Separator vertical="big" />
            {error.length > 0 && (
              <>
                <Text style={styles.error}>{error}</Text>
                <Separator />
              </>
            )}
            <StandardButton
              title="Register"
              onPress={handleSubmit}
              color={dark}
              backgroundColor={brandColor}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  title: {
    fontSize: 30,
    color: dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: red,
    fontSize: 18,
  },
});
