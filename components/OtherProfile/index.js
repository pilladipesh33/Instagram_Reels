/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {Padding} from '../../constants/Theme';
import {getUserDetails} from '../../api/services/users';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, IconSize} from '../../constants/Theme';
import {FontSize} from '../../constants/Theme';
import {fetchPost} from '../../api/services/posts';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../context/Themes/index';
import VideoPlayer from 'react-native-video';

const OtherProfile = ({route, navigation}) => {
  const {theme} = useContext(ThemeContext);
  const {creator, docId} = route.params;
  const [userDetail, setUserDetail] = useState('');
  const [userPost, setuserPost] = useState('');

  useEffect(() => {
    getUserDetails(creator, setUserDetail);
    fetchPost(creator, setuserPost);
  }, []);

  console.log('c', userPost);

  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <View style={styles.screen}>
        <VideoPlayer
          source={{
            uri: item?.media,
          }}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          style={styles.videoPlayer}
          repeat={true}
          volume={0.0}
        />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{item?.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name="chevron-back"
          color={Colors.BLACK}
          size={IconSize.MEDIUM}
        />
      </Pressable>
      <View style={styles.profilePictureContainer}>
        <Image source={{uri: userDetail.Image}} style={styles.profilePicture} />
        <Text style={styles.profileName}>{userDetail.FullName}</Text>
      </View>

      <View>
        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 10,
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcon
              name="format-columns"
              size={IconSize.SMALL}
              style={styles[`icon_${theme}`]}
            />
          </TouchableOpacity>
          <MaterialCommunityIcon
            name="cards-heart-outline"
            size={IconSize.SMALL}
            style={styles[`icon_${theme}`]}
          />
        </View>
        <View style={styles.line} />
      </View>
      <View>
        <FlatList data={userPost} renderItem={renderItem} horizontal />
      </View>
    </View>
  );
};

export default OtherProfile;

const styles = StyleSheet.create({
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    paddingTop: Padding,
  },
  profilePictureContainer: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: FontSize.LARGE,
    color: Colors.BLACK,
    fontWeight: '900',
  },
  line: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    opacity: 0.5,
    marginTop: 15,
  },
  icon_light: {
    color: Colors.BLACK,
  },
  icon_dark: {
    color: Colors.WHITE,
  },
  videoPlayer: {
    height: 400,
    width: 200,
  },
  screen: {
    padding: 10,
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: FontSize.MEDIUM,
    marginBottom: 40,
    color: Colors.BLACK,
  },
});
