import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import EditProfile from '../screens/profile/EditProfile';
import Setting from '../screens/setting/index';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' component={BottomTabNavigator} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='Setting' component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
