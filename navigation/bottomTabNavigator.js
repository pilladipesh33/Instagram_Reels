import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import Home from '../screens/home';
import {Colors, IconSize} from '../constants/Theme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Profile from '../screens/profile';
import Inbox from '../screens/inbox/index';
import Feed from '../screens/feed/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AddFeed from '../screens/feed/AddFeed';
import Discover from '../screens/discover/index';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName='Discover'
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
      {/* <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name={'feed'}
              size={IconSize.MEDIUM}
              color={Colors.WHITE}
            />
          ),
        }}
      /> */}
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
        component={AddFeed}
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
        component={Inbox}
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
        component={Profile}
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
