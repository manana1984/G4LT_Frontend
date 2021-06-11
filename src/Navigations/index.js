import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AdminNavigator, ClientNavigator } from './drawer-navigators';
import { AuthNavigator } from './stack-navigators';
import { connectIsAuth } from '../Redux/connects';

import AuthAPI from '../Services/auth';

function Navigator({ authenticated, login }) {
  const RootNavigator = authenticated ? ClientNavigator : AuthNavigator;

  useEffect(() => {
    AuthAPI.verifyAccesstoken().then(user => {
      login(user);
    }, e => console.log(e));
  }, []);
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default connectIsAuth(Navigator);
