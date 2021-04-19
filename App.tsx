import React from 'react';
import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModel } from './src/screens/BoxObjectModel';
import { SafeAreaView } from 'react-native';
import { LoginWithGoogleScreen } from './src/screens/LoginWithGoogleScreen';
// import { TareaScreen } from './src/screens/TareaScreen';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginWithGoogleScreen />
    </SafeAreaView>
  );
};

export default App;
