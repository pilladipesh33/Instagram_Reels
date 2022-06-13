import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {FontSize, Colors, IconSize} from '../../constants/Theme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../context/Themes/index';
import { useSelector } from 'react-redux';
import { firebase } from '@react-native-firebase/firestore';
import { getFeed } from '../../api/services/posts';
import { FlatList } from 'react-native-gesture-handler';
import UserPostDetail from '../../components/UserPostDetail/index';

const Profile = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  const [userDetail, setUserDetail] = useState({});
  const [postFeed, setPostFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector(state => state?.auth?.accessToken);

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  
  const getUser = async () => {
    const currentUser = await firebase.firestore()
      .collection('users')
      .doc(accessToken)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserDetail(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    getFeed(accessToken)
    .then(setPostFeed);
    navigation.addListener('focus', () => setLoading(!loading));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[navigation, loading]);

  console.log('post',userDetail);

  return (
    <ScrollView style={styles[`container_${theme}`]}>
      <View style={styles.header}>
        <Text style={[styles.name, styles[`text_${theme}`]]}>{userDetail.Email}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Feather
            name="settings"
            size={IconSize.SMALL}
            color={Colors.BLACK}
            style={[styles[`icon_${theme}`], {marginRight: 10, marginTop: 20}]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: userDetail
            ? userDetail.Image
            : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
        }}
          style={styles.profilePicture}
        />
        <Text style={[styles.name, styles[`text_${theme}`]]}>{userDetail.FullName}</Text>
      </View>

      <View style={styles.topRow}>
        <Text style={[styles.detail, styles[`text_${theme}`]]}>114.2K</Text>
        <Text style={[styles.detail, styles[`text_${theme}`]]}>1.6M</Text>
      </View>
      <View style={styles.topRow}>
        <Text style={[styles[`text_${theme}`], {color: Colors.GREY}]}>
          Followers
        </Text>
        <Text style={[styles[`text_${theme}`], {color: Colors.GREY}]}>
          Likes
        </Text>
      </View>

      <View style={styles.EditButtonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={navigateToEditProfile}>
          <Text style={[styles.editText, styles[`text_${theme}`]]}>
            Edit profile
          </Text>
        </TouchableOpacity>
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
        <FlatList
        data={postFeed}
        renderItem={(item) => <UserPostDetail detail={item}/>} 
        horizontal
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container_light: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container_dark: {
    backgroundColor: '#413F42',
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  icon_light: {
    color: Colors.BLACK,
  },
  icon_dark: {
    color: Colors.WHITE,
  },
  text_light: {
    color: Colors.BLACK,
  },
  text_dark: {
    color: Colors.WHITE,
  },
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
    // flexDirection: 'row',
    marginLeft: 50,
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
    marginTop: 15,
  },
  videoPlayer:{
    height: 200,
    width: 100,
  }
});
