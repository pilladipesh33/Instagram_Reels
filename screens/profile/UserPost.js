import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {VideoPlayer} from 'react-native-video-controls';
import {getUserPost} from '../../api/services/posts';

const UserPost = () => {
  const [userPost, setUserPost] = useState('');

  useEffect(() => {
    getUserPost(accessTOken).then(setUserPost);
  }, [accessTOken]);

  const accessTOken = useSelector(state => state.auth.accessToken);
  console.log('item', userPost);

  return (
    <View>
        <VideoPlayer
          source={{
            uri: 'content://com.android.providers.media.documents/document/video%3A26',
          }}
          resizeMode={'cover'}
          style={styles.videoPlayer}
        />
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  videoPlayer: {
    height: 300,
    width: '100%',
  },
});
