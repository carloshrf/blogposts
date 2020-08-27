import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';

const MainNavigator = createStackNavigator();

const MainRoutes: React.FC = () => (
  <MainNavigator.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#00c100'}
    }}
  >
    <MainNavigator.Screen name="Home" component={Home} />
  </MainNavigator.Navigator>
);

export default MainRoutes;