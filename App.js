import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './src/Route/AppStack';
const App = () => {
  return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
  )
}

export default App;