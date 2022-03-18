import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/ui/navigation/Navigator';
import {Cache} from './src/ui/cache/Cache';

const App = () => {
  return (
    <Cache>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Cache>
  );
};

export default App;
