import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserService} from '../../../core/application/UserService';

export const Login = () => {
  const navigator = useNavigation<StackNavigationProp<any>>();
  const [hasFailedLogin, setHasFailedLogin] = useState(false);
  const handleLogin = async () => {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    const user = await UserService.getUser();
    if (user) {
      console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
      console.log(JSON.stringify(user, null, 5));
      navigator.navigate('ExperiencesController');
    } else {
      setHasFailedLogin(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      {hasFailedLogin && <Text>User does not Exist</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
