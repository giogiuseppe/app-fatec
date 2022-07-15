import React from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import AccountRecovery from './pages/AccountRecovery';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name='Register' 
      component={Register}
      options={{
        headerShown: true,
        gestureEnabled: false,
        headerLeft: () => <></>,
        headerTransparent: true,
        title: 'CADASTRAR CONTA',
        headerStyle: {
            backgroundColor: 'transparent',
        },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }} 
      />

      <Stack.Screen 
      name='Login' 
      component={Login}
      options={{
        headerShown: true,
        gestureEnabled: false,
        headerLeft: () => <></>,
        headerTransparent: true,
        title: 'ACESSAR CONTA',
        headerStyle: {
            backgroundColor: 'transparent',
        },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }} 
      />

      <Stack.Screen 
      name='AccountRecovery' 
      component={AccountRecovery}
      options={{
        headerShown: true,
        gestureEnabled: false,
        headerLeft: () => <></>,
        headerTransparent: true,
        title: 'RECUPERAR CONTA',
        headerStyle: {
            backgroundColor: 'transparent',
        },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
        }} 
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}