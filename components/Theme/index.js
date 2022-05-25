import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, IconSize, FontSize} from '../../constants/Theme';
import {ThemeContext} from '../../context/Themes/index';
import {ToggleButton} from './Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Theme = ({navigation}) => {
  const {theme} = useContext(ThemeContext);       //Destructure the Theme variable
 
  return (
    <SafeAreaView style={styles[`container_${theme}`]}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={IconSize.MEDIUM}
          onPress={() => navigation.navigate('Setting')}
          style={styles[`icon_${theme}`]}
        />
        <Text style={styles[`headerText_${theme}`]}>Set theme</Text>
      </View>
      <View style={styles.palette}>
          <MaterialCommunityIcons name='theme-light-dark' style={styles[`icon_${theme}`]} size={IconSize.MEDIUM} />
        <Text style={styles[`buttonText_${theme}`]}>Change Theme to:</Text>
        <ToggleButton title={theme === 'dark' ? 'Light' : 'Dark'} />
      </View>
    </SafeAreaView>
  );
};

export default Theme;

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
  headerText_light: {
    fontSize: FontSize.MEDIUM,
    color: Colors.BLACK,
    marginLeft: 20,
    fontWeight: '600',
  },
  headerText_dark: {
    fontSize: FontSize.MEDIUM,
    color: Colors.WHITE,
    marginLeft: 20,
    fontWeight: '600',
  },
  palette: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-around'
  },
  buttonText_light: {
      color: Colors.BLACK,
      fontSize: FontSize.SMALL,
  },
  buttonText_dark: {
      color: Colors.WHITE,
      fontSize: FontSize.SMALL,
  },
});
