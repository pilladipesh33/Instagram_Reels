import React, {useState} from 'react';
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

const {height} = Dimensions.get('window');

const VideoPlayers = (props) => {
  const [isPaused, setisPaused] = useState(false);
  const [post, setPost] = useState(props?.post);
  const [isLiked,  setisLiked] = useState(false);

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

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <VideoPlayer
          source={{
            uri: post?.videoUri,
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
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post?.user?.imageUri,
              }}
            />
          </View>

          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <Entypo name="heart" color={isLiked ? Colors.RED : Colors.WHITE} size={IconSize.LARGE} />
            <Text style={styles.statsLabel}>{post?.likes}</Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <FontAwesome name="commenting" color={Colors.WHITE} size={IconSize.LARGE} />
            <Text style={styles.statsLabel}>{post?.comments}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Fontisto name="share-a" color={Colors.WHITE} size={IconSize.MEDIUM} />
            <Text style={styles.statsLabel}>{post?.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>{`@${post.user.username}`}</Text>
            <Text style={styles.description}>{post?.description}</Text>

            <View style={styles.songRow}>
              <Entypo name="beamed-note" size={IconSize.SMALL} color={Colors.WHITE} />
              <Text style={styles.songName}>{post?.songName}</Text>
            </View>
          </View>
          <Image
            style={styles.songImage}
            source={{
              uri: post?.songImage,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoPlayers;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: height - 80,
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
