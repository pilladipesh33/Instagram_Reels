import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                useNativeDriver: true,
                headerShown: false,
              }}
              initialRouteName={'Login'}
              detachInactiveScreens={false}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStack;