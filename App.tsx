import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { CarProvider } from './src/contexts/car';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <CarProvider>
          <Routes />
        </CarProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
