import {
  View,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Alert,
  Text
} from 'react-native';
import React, {useState} from 'react';
import {registration} from '../../../redux/action/AuthAction';
import {Input} from '../../../components/Input';
import {Colors, IconSize, Padding} from '../../../constants/Theme';
import {Button} from '../../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SpinnerButton from 'react-native-spinner-button';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableShift, setenableShift] = React.useState(false);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = () => {
    try {
      registration(email, password, fullName)
      .then(() => {
        Alert.alert(
          'New account is created',
          'Kindly login again'
        );
      });
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior="position"
        enabled={enableShift}
        style={styles.container}>
        <View style={styles.imageLogo}>
          <Image
            source={{
              uri: 'https://logos-world.net/wp-content/uploads/2020/04/TikTok-Logo.png',
            }}
            style={styles.logo}
          />
        </View>
        <Pressable
          style={styles.header}
          onPress={() => navigation.navigate('Login')}>
          <Ionicons
            name="chevron-back"
            color={Colors.BLACK}
            size={IconSize.MEDIUM}
          />
        </Pressable>
        <View style={styles.Input}>
          <Input
            placeholder={'Username'}
            placeholderTextColor={Colors.WHITE}
            value={fullName}
            changeText={setFullName}
            newStyles={styles.textInput}
            onFocus={() => setenableShift(false)}
          />
        </View>
        <View style={styles.Input}>
          <Input
            placeholder={'Email'}
            placeholderTextColor={Colors.WHITE}
            value={email}
            changeText={setEmail}
            onFocus={() => setenableShift(true)}
            newStyles={styles.textInput}
          />
        </View>
        <View style={styles.Input}>
          <Input
            placeholder={'Password'}
            secureTextEntry
            placeholderTextColor={Colors.WHITE}
            value={password}
            changeText={setPassword}
            newStyles={styles.textInput}
            onFocus={() => setenableShift(true)}
          />
        </View>
        <Button
          buttonColor={Colors.RED}
          titleColor={Colors.WHITE}
          title="Sign In"
          buttonStyle={{width: '90%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={onSubmit}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Padding,
  },
  header: {
    position: 'absolute',
  },
  Input: {
    paddingBottom: Padding,
  },
  textInput: {
    backgroundColor: '#84848c',
    opacity: 0.4,
    borderRadius: 15,
    padding: '5%',
  },
  logo: {
    height: 200,
    width: 300,
  },
  imageLogo: {
    alignItems: 'center',
    paddingBottom: Padding,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  buttonStyle: {
    borderRadius: 10,
    margin: 5
  },
});

export default Signup;
