import { View, Text, TextInput, Button } from 'react-native'
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View>
        <TextInput placeholder='EMial'/>
        <TextInput placeholder='Password'/>
        <Button title='Submit'/>
        <Button title='signup' onPress={() => navigation.navigate('Signup')}/>
    </View>
  )
}

export default Login;
