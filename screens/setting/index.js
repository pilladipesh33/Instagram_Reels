import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, IconSize, FontSize} from '../../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Setting = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Ionicons
            name="chevron-back"
            color={Colors.BLACK}
            size={IconSize.MEDIUM}
          />
        </Pressable>
        <Text style={styles.headingTitle}>Settings and privacy</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.smallHeading}>ACCOUNT</Text>
        <View style={styles.icon}>
          <AntDesign name="user" color={Colors.BLACK} size={IconSize.SMALL} />
          <Text style={{marginLeft: 10}}>Manage account</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="lock" color={Colors.BLACK} size={IconSize.SMALL} />
          <Text style={{marginLeft: 10}}>Security and login</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="wallet" color={Colors.BLACK} size={IconSize.SMALL} />
          <Text style={{marginLeft: 10}}>Balance</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.smallHeading}>GENERAL</Text>
        <View style={styles.icon}>
          <Ionicons
            name="color-palette-outline"
            color={Colors.BLACK}
            size={IconSize.SMALL}
          />
          <Text style={{marginLeft: 10}}>Theme</Text>
        </View>
        <View style={styles.icon}>
          <Ionicons
            name="umbrella-outline"
            color={Colors.BLACK}
            size={IconSize.SMALL}
          />
          <Text style={{marginLeft: 10}}>Parent wellbeing</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="logout" color={Colors.BLACK} size={IconSize.SMALL} />
          <Text style={{marginLeft: 10}}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTitle: {
    fontSize: FontSize.MEDIUM,
    fontWeight: '500',
    marginLeft: 20,
  },
  body: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  smallHeading: {
    color: Colors.DARK_GREY,
    fontWeight: '500',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
