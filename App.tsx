import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/ui/navigation/Navigator';
import {Cache} from './src/ui/cache/Cache';
import {UserContextProvider} from './src/ui/Context/UserContext';

const App = () => {
  return (
    <Cache>
      <NavigationContainer>
        <UserContextProvider>
          <MyStack />
        </UserContextProvider>
      </NavigationContainer>
    </Cache>
  );
};

export default App;
