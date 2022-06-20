import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import VideoPlayer from 'react-native-video';
import { FontSize, Colors } from '../../constants/Theme';

const UserPostDetail = (props) => {
    const [post, setPost] = useState(props?.detail);
    console.log('key', post.item);
  return (
    <View style={styles.screen}>
      <VideoPlayer
            source={{
              uri: post?.item?.media,
            }}
            onError={e => console.log(e)}
            resizeMode={'cover'}
            style={styles.videoPlayer}
            repeat={true}
            volume={0.0}
          />
          <View style={styles.description}>
            <Text style={styles.descriptionText}>{post.item.description}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    color: Colors.BLACK
  }
})

export default UserPostDetail;