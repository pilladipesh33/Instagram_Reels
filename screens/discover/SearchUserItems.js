import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, FontSize } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const SearchUserItems = ({item}) => {
  // const navigation = useNavigation();
  // function sendProfile() {
  //   navigation.navigate('OtherProfile', {otherProfile: item});
  // }
  console.log(item.FullName);
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Text style={{flex: 1, fontSize: FontSize.MEDIUM}}>{item.FullName}</Text>
      <Image source={{uri:"https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/2021-Simple-Whatsapp-Dp-Profile-Images-photo-hd.gif"}} style={styles.images}/>
    </TouchableOpacity>
  )
}

export default SearchUserItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  images: {
    height: 40, 
    width: 40,
    borderRadius: 20,
  }
})