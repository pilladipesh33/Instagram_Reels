import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import VideoPlayer from 'react-native-video';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors, IconSize, FontSize } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const {height} = Dimensions.get('screen');

const VideoPlayers = (props) => {
  const [isPaused, setisPaused] = useState(false);
  const [post, setPost] = useState(props?.post);
  const [isLiked,  setisLiked] = useState(false);

  const navigation = useNavigation();

  const onPlayPausePress = () => {
    setisPaused(!isPaused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setisLiked(!isLiked)
  };

  console.log('post', post);

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <VideoPlayer
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          style={styles.videoPlayer}
          repeat={true}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          paused={isPaused}
          volume={0.0}
        />
      </TouchableWithoutFeedback>

      <View style={styles.details}>
        <View style={styles.rightContainer}>
          {/* <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post?.user?.imageUri,
              }}
            />
          </View> */}

          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <Entypo name="heart" color={isLiked ? Colors.RED : Colors.WHITE} size={IconSize.LARGE} />
            <Text style={styles.statsLabel}>{post?.likesCount}</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <FontAwesome name="commenting" color={Colors.WHITE} size={IconSize.LARGE} />
            <Text style={styles.statsLabel}>{post?.commentCounts}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name="share-a" color={Colors.WHITE} size={IconSize.MEDIUM} />
            <Text style={styles.statsLabel}>{post?.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
           <View>
             <TouchableOpacity onPress={() => navigation.navigate('OtherProfile')}>
            <Text style={styles.handle}>{post?.creator}</Text>
             </TouchableOpacity>
            <Text style={styles.description}>{post?.detail}</Text>
            </View>
          </View>
        </View>
      </View>
  );
};

export default VideoPlayers;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: height - 85,
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  icons: {
    marginLeft: '80%',
    marginVertical: '150%',
    justifyContent: 'flex-end',
    marginTop: '10%',
    alignItems: 'flex-end',
  },
  overlayPosition: {
    marginRight: 170,
    marginTop: height - 550,
  },
  details: {
    marginTop: 'auto',
  },
  bottomText: {
    fontSize: FontSize.MEDIUM,
    color: Colors.WHITE,
  },
  bottomContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: Colors.WHITE,
    fontSize: FontSize.SMALL,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    color: Colors.WHITE,
    fontSize: FontSize.SMALL,
    fontWeight: '300',
    marginBottom: 15,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: Colors.WHITE,
    fontSize: FontSize.SMALL,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.GREY,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.WHITE,
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: Colors.WHITE,
    fontSize: FontSize.SMALL,
    fontWeight: '600',
    marginTop: 5,
  },
});
