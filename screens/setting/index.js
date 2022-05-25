import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, IconSize, FontSize} from '../../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../../context/Themes/index';

const Setting = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles[`container_${theme}`]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Ionicons
            name="chevron-back"
            style={styles[`icon_${theme}`]}
            size={IconSize.MEDIUM}
          />
        </Pressable>
        <Text style={styles[`headingTitle_${theme}`]}>Settings and privacy</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles[`smallHeading_${theme}`]}>ACCOUNT</Text>
        <View style={styles.icon}>
          <AntDesign name="user" style={styles[`icon_${theme}`]} size={IconSize.SMALL} />
          <Text style={styles[`text_${theme}`]}>Manage account</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="lock" style={styles[`icon_${theme}`]} size={IconSize.SMALL} />
          <Text style={styles[`text_${theme}`]}>Security and login</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="wallet" style={styles[`icon_${theme}`]} size={IconSize.SMALL} />
          <Text style={styles[`text_${theme}`]}>Balance</Text>
        </View>
      </View>

      {/*General*/}
      <View style={styles.body}>
        <Text style={styles[`smallHeading_${theme}`]}>GENERAL</Text>
        <Pressable style={styles.icon} onPress={() => navigation.navigate('Theme')}>
          <Ionicons
            name="color-palette-outline"
            style={styles[`icon_${theme}`]}
            size={IconSize.SMALL}
          />
          <Text style={styles[`text_${theme}`]}>Theme</Text>
        </Pressable>
        <View style={styles.icon}>
          <Ionicons
            name="umbrella-outline"
            style={styles[`icon_${theme}`]}
            size={IconSize.SMALL}
          />
          <Text style={styles[`text_${theme}`]}>Parent wellbeing</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="logout" style={styles[`icon_${theme}`]} size={IconSize.SMALL} />
          <Text style={styles[`text_${theme}`]}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container_light: {
    backgroundColor: 'white',
    height: '100%',
  },
  container_dark: {
    backgroundColor: '#413F42',
    height: '100%',
  },
  icon_light: {
    color: Colors.BLACK,
  },
  icon_dark: {
    color: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTitle_light: {
    fontSize: FontSize.MEDIUM,
    fontWeight: '500',
    marginLeft: 20,
    color: Colors.BLACK,
  },
  headingTitle_dark: {
    fontSize: FontSize.MEDIUM,
    fontWeight: '500',
    marginLeft: 20,
    color: Colors.WHITE,
  },
  body: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  smallHeading_light: {
    color: Colors.DARK_GREY,
    fontWeight: '500',
  },
  smallHeading_dark: {
    color: '#EEEEEE',
    fontWeight: '500',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text_light: {
    color: Colors.BLACK,
    marginLeft: 10,
  },
  text_dark: {
    color: Colors.WHITE,
    marginLeft: 10,
  }
});
