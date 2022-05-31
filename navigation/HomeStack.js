import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import EditProfile from '../screens/profile/EditProfile';
import Setting from '../screens/setting/index';
import Theme from '../components/Theme/index';
import AddFeed from '../screens/feed/AddFeed';
import UserPost from '../screens/profile/UserPost';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' component={BottomTabNavigator} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='Setting' component={Setting} />
                <Stack.Screen name='Theme' component={Theme} />
                <Stack.Screen name='UserPost' component={UserPost} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default HomeStack;
