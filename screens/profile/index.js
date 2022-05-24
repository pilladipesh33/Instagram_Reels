import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FontSize, Colors, IconSize} from '../../constants/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Profile = ({navigation}) => {

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const [isBookmark, setIsBookmark] =  useState(true);
  const toggleBookmark = () => {
    setIsBookmark(!isBookmark);
  }

  return (
    <SafeAreaView>
        <View style={styles.header}>
      <Text style={styles.name}>@daviddobrik</Text>
      <Feather name='settings' size={IconSize.SMALL} color={Colors.BLACK} style={{marginRight: 10, marginTop: 20}}/>
        </View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg',
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>David Dobrik</Text>
      </View>

      <View style={styles.topRow}>
        <Text style={styles.detail}>114.2K</Text>
        <Text style={styles.detail}>1.6M</Text>
      </View>
      <View style={styles.topRow}>
        <Text style={{color: Colors.GREY}}>Followers</Text>
        <Text style={{color: Colors.GREY}}>Likes</Text>
      </View>

      <View style={styles.EditButtonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={navigateToEditProfile}>
          <Text style={styles.editText}>Edit profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.editButton, {marginLeft: 10}]} onPress={toggleBookmark}>
          <FontAwesome name={isBookmark ? 'bookmark-o' : 'bookmark'} size={20} />
        </TouchableOpacity>
      </View>

      <View>
          <View style={styles.line}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
              <MaterialCommunityIcon name='format-columns' size={IconSize.SMALL} color={Colors.BLACK} />
              <MaterialCommunityIcon name='cards-heart-outline' size={IconSize.SMALL} color={Colors.BLACK} />
          </View>
          <View style={styles.line} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: FontSize.MEDIUM,
    marginTop: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  detail: {
    fontWeight: '700',
    fontSize: FontSize.MEDIUM,
  },
  EditButtonContainer: {
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 90,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
  editText: {
    fontSize: FontSize.SMALL,
    fontWeight: '500',
  },
  line: {
      width: '100%',
      borderWidth: 0.5,
      borderColor: Colors.GREY,
      opacity: 0.5,
      marginTop: 15
  },

});
