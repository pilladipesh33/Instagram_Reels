import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleSignin} from '../../../redux/action/AuthAction';
import {Input} from '../../../components/Input';
import {Colors, Padding} from '../../../constants/Theme';
import {Button} from '../../../components/Button';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableShift, setenableShift] = React.useState(false);
  const dispatch = useDispatch();

  function onSubmit() {
    try {
      dispatch(handleSignin(email, password));
    } catch {
      error => alert(error.msg);
    }
  }

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
      enabled={enableShift}
      behavior={Platform.OS === "android" ? "padding" : "height"}
      >
      <View style={styles.imageLogo}>
        <Image
          source={{
            uri: 'https://logos-world.net/wp-content/uploads/2020/04/TikTok-Logo.png',
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.Input}>
        <Input
          placeholder={'Email'}
          placeholderTextColor={Colors.WHITE}
          value={email}
          changeText={setEmail}
          newStyles={styles.textInput}
          onFocus={() => setenableShift(false)}
        />
      </View>
      <View style={styles.Input}>
      <Input
          placeholder={'Password'}
          placeholderTextColor={Colors.WHITE}
          value={password}
          changeText={setPassword}
          newStyles={styles.textInput}
          onFocus={() => setenableShift(false)}
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.signUpButton}>
        <Text>Create account</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Padding,
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
    height: 300,
    width: 300,
  },
  imageLogo: {
    alignItems: 'center',
    paddingBottom: Padding,
  },
  signUpButton: {
    alignItems: 'center',
    paddingTop: Padding,
  },
});

export default Login;
