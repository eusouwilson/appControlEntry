import React from 'react';
import Admin from '../screens/Admin';
import { createStackNavigator } from '@react-navigation/stack';

const adminStack = createStackNavigator();

const AdminRoutes: React.FC = () => (
  <adminStack.Navigator>
    <adminStack.Screen
      name="admin"
      component={Admin}
      options={{ headerShown: false }}
    />
  </adminStack.Navigator>
);

export default AdminRoutes;
