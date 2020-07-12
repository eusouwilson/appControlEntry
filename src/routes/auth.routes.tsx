import React from 'react';
import Login from '../screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const authStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <authStack.Navigator>
    <authStack.Screen
      name="login"
      component={Login}
      options={{ headerShown: false }}
    />
  </authStack.Navigator>
);

export default AuthRoutes;
