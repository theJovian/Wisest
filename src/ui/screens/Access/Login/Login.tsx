import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegisterFormValues} from '../Register/Register.controller';
import {Separator} from '../../../components/Atoms/Separator';
import {Formik} from 'formik';
import {TextInputItem} from '../../../components/Molecules/TextInputItem';
import {StandardButton} from '../../../components/Objects/StandardButton';
import {brandColor, dark, red} from '../../../Styles/globalStyle';
import {LoginFormValues} from './Login.controller';

interface Props {
  onSubmit: (values: LoginFormValues) => void;
  error: string;
}

export const Login = ({onSubmit, error}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Separator />
      <Formik
        onSubmit={values => onSubmit(values)}
        initialValues={{
          email: '',
          password: '',
        }}>
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <View style={styles.form}>
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
            <Separator vertical="big" />
            {error.length > 0 && (
              <>
                <Text style={styles.error}>{error}</Text>
                <Separator />
              </>
            )}
            <StandardButton
              title="Login"
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
