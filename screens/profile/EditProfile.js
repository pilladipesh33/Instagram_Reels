import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontSize, IconSize} from '../../constants/Theme';
import posts from '../../assets/data/posts';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.heading}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Feather
            name="x"
            color={Colors.BLACK}
            size={IconSize.MEDIUM}
            style={{marginLeft: 10}}
          />
        </Pressable>
        <Text style={styles.headingText}>Edit profile</Text>
        <Pressable>
          <Ionicons
            name="checkmark"
            color={Colors.BLACK}
            size={IconSize.MEDIUM}
            style={{marginRight: 10}}
          />
        </Pressable>
      </View>
      <View style={styles.profilePicture}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA.jpg',
          }}
          style={styles.ProfileImage}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.detail}>
          <Text style={{color: Colors.DARK_GREY}}>Username</Text>
          <TextInput
            placeholder="Change username..."
            placeholderTextColor={Colors.GREY}
            style={styles.textInput}
          />
        </View>
        <View style={styles.detail}>
          <Text style={{color: Colors.DARK_GREY}}>Name</Text>
          <TextInput
            placeholder="Change name..."
            placeholderTextColor={Colors.GREY}
            style={styles.textInput}
          />
        </View>
        <View style={styles.detail}>
          <Text style={{color: Colors.DARK_GREY}}>Bio</Text>
          <TextInput
            placeholder="Change bio..."
            placeholderTextColor={Colors.GREY}
            style={styles.textInput}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: FontSize.MEDIUM,
    color: Colors.BLACK,
    fontWeight: '700',
  },
  profilePicture: {
    alignItems: 'center',
    padding: '10%',
  },
  ProfileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  bodyContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  detail: {
    marginTop: 10,
  },
  textInput: {
    height: 44,
    borderWidth: 1,
    borderBottomColor: Colors.GREY,
    borderColor: 'transparent',
  },
});
