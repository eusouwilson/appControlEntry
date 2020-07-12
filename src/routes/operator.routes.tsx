import React from 'react';
import Operator from '../screens/Operator';
import { createStackNavigator } from '@react-navigation/stack';

const operatorStack = createStackNavigator();

const OperatorRoutes: React.FC = () => (
  <operatorStack.Navigator>
    <operatorStack.Screen
      name="Operator"
      component={Operator}
      options={{ headerShown: false }}
    />
  </operatorStack.Navigator>
);

export default OperatorRoutes;
