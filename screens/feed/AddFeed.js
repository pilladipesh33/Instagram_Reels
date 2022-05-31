import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconSize, Colors, Padding, FontSize} from '../../constants/Theme';
import {Input} from '../../components/Input';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import VideoPlayer from 'react-native-video';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const AddFeed = ({navigation}) => {
  const [videoId, setVideoId] = useState(null);
  const [detail, setDetail] = useState('');
  const accessToken = useSelector(state => state?.auth?.accessToken);

  async function chooseVideo() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });
      setVideoId(res[0].uri);
    } catch (e) {
      console.log(e);
    }
  }

  const UploadVideo = async () => {
    return await firestore()
      .collection('PostData')
      .doc(accessToken)
      .collection('Post')
      .add({
        videoId: videoId,
        detail: detail,
        userId: accessToken,
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        {/* <MaterialIcons
          name="arrow-back-ios"
          size={IconSize.MEDIUM}
          color={Colors.BLACK}
          onPress={() => navigation.navigate('Feed')}
          style={{position: 'absolute', left: 0, marginLeft: 10}}
        /> */}
        <Text style={styles.headerText}>Create Post</Text>
      </View>
      <View style={styles.container}>
        <Input
          placeholder={'Whats on your mind?'}
          newStyles={styles.textInput}
          multiline={true}
          numberOfLines={5}
          value={detail}
          changeText={setDetail}
        />
      </View>
      {videoId != null ? (
        <View style={{alignItems: 'center'}}>
          <VideoPlayer
            source={{
              uri: videoId,
            }}
            onError={e => console.log(e)}
            resizeMode={'cover'}
            style={styles.videoPlayer}
            repeat={true}
            volume={0.0}
          />
        </View>
      ) : null}
      <View>
        <Button
          buttonColor={'#ffdee1'}
          titleColor={'#f04351'}
          title="Post"
          buttonStyle={{width: '50%', alignSelf: 'center'}}
          textStyle={{fontSize: 20}}
          onPress={UploadVideo}
        />
      </View>
      <View style={styles.postButton}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Camera"
            onPress={() => {}}>
            <Icon name="camera" style={styles.actionButtonIcon} size={30} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="Gallery"
            onPress={() => chooseVideo()}>
            <Icon
              name="md-image-outline"
              style={styles.actionButtonIcon}
              size={30}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Padding,
    height: '100%',
    backgroundColor: '#dfe8f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: FontSize.LARGE,
    color: Colors.BLACK,
    fontWeight: 'bold'
  },
  container: {
    // top: '50%',
    // marginLeft: '10%',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    width: '90%',
    padding: 10,
    alignSelf: 'center',
  },
  postButton: {
    // top: '50%',
  },
  postImage: {
    height: 300,
    width: '90%',
  },
  postImg: {
    paddingTop: '5%',
    alignItems: 'center',
  },
  videoPlayer: {
    height: 300,
    width: '80%',
  },
});

export default AddFeed;
