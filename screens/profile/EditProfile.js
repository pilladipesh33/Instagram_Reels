import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, FontSize, IconSize, Padding} from '../../constants/Theme';
import storage from '@react-native-firebase/storage';
import {useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/firestore';
import * as ImagePicker from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userDetail, setUserDetail] = useState({});

  const uid = useSelector(state => state?.auth?.accessToken);

  const getUser = async () => {
    const currentUser = await firebase.firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserDetail(documentSnapshot.data());
        }
      });
  };

  console.log(userDetail);

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl == null && userDetail[0].Image) {
      imgUrl = userDetail[0].Image;
    }

    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .update({
        FullName: userDetail.FullName,
        Image: imgUrl,
      })
      .then(() => {
        console.log('User Updated!');
        // eslint-disable-next-line no-alert
        alert(
          'Profile Updated!',
          'Your profile has been updated successfully.',
        );
      });

      navigation.navigate('Profile');
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  function openGallery() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      parseResponse(res);
    });
  }
  function parseResponse(res) {
    console.log('Response = ', res);
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      const source = {uri: res.assets[0].uri};
      setImage(source.uri);
    }
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('image', userDetail);

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
        <Pressable onPress={handleUpdate}>
          <Ionicons
            name="checkmark"
            color={Colors.BLACK}
            size={IconSize.MEDIUM}
            style={{marginRight: 10}}
          />
        </Pressable>
      </View>
      <View style={styles.profilePicture}>
        <Pressable onPress={openGallery}>
          <Image
            source={{
              uri: image
                ? image
                : userDetail
                ? userDetail.Image ||
                  'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            }}
            style={styles.ProfileImage}
          />
        </Pressable>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.detail}>
          <Text style={{color: Colors.DARK_GREY}}>Username</Text>
          <TextInput
            // placeholder= {userDetail ? userDetail[0].FullName : ''}
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
    paddingTop: Padding,
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
