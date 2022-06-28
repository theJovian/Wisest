import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dark, red} from '../../Styles/globalStyle';
import {UserContext} from '../../Context/UserContext';
import {Separator} from '../../components/Objects/Separator';
import {StandardButton} from '../../components/Atoms/StandardButton';

interface Props {
  onLogout: () => void;
  onDelete: () => void;
}

export const Settings = ({onLogout, onDelete}: Props) => {
  const {user} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Username</Text>
      <Text style={styles.text}>{user?.username}</Text>
      <Separator />
      <Text style={styles.subtitle}>Email</Text>
      <Text style={styles.text}>{user?.email}</Text>
      <Separator vertical="big" />
      <View style={styles.buttons}>
        <StandardButton title="Logout" onPress={onLogout} />
        <Separator />
        <StandardButton
          title="Delete"
          onPress={onDelete}
          backgroundColor={red}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    marginVertical: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: dark,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: dark,
  },
  text: {
    marginVertical: 5,
    fontSize: 18,
    color: dark,
  },
  buttons: {
    alignItems: 'center',
  },
});
