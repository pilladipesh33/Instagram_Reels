import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

export const RootNavigation = () => {
    const accessToken = useSelector(state => state?.auth?.accessToken);
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar translucent backgroundColor="transparent" />
        {accessToken == null || accessToken == undefined || accessToken == '' ? (
          <AuthStack />
        ) : (
          <HomeStack />
        )}
      </View>
    );
  };