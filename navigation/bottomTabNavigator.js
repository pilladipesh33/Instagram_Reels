import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import Home from '../screens/home';
import {Colors, IconSize} from '../constants/Theme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Discover from '../screens/discover/index';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000'},
        tabBarActiveTintColor: Colors.WHITE,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcon
              name={'home'}
              size={IconSize.MEDIUM}
              color={Colors.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name={'search-sharp'}
              size={IconSize.MEDIUM}
              color={Colors.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/plus-icon.png')}
              style={{height: 35, resizeMode: 'contain'}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo
              name={'message'}
              size={IconSize.MEDIUM}
              color={Colors.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name={'user'} size={IconSize.MEDIUM} color={Colors.WHITE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
