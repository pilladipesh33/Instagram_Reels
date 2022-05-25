import { View, Text, TextInput, Button } from 'react-native'
import React from 'react';

const Signup = ({navigation}) => {
  return (
    <View>
        <TextInput placeholder='Fullname'/>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Password'/>
        <Button title='submit'/>
        <Button title='Login' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

export default Signup;
