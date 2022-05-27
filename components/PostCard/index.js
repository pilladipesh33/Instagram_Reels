import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostCard = ({item}) => {
    const likeIcon = item.liked ? 'heart' : 'heart-outline';
    const likeIconColor = item.liked ? Colors.RED : '#333';

    return (
        <View style={styles.Card}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: item.userImg}}
            style={styles.userImg}
          />
          <View style={styles.userInfoText}>
            <Text style={styles.username}>{item.userName}</Text>
            <Text style={styles.PostTime}>{item.postTime}</Text>
          </View>
        </View>
        <Text style={styles.postText}>{item.post}</Text>
        {item.postImg != 'none' ? <Image
          source={{uri: item.postImg }}
          style={styles.PostImg}
        /> : <View style={styles.line} />}
        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconsButton}>
            <Ionicons name={likeIcon} size={25} color={likeIconColor}/>
            <Text style={styles.username}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconsButton}>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <Text style={styles.username}>Comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    Card: {
        marginTop: 10,
        backgroundColor: '#f8f8f8',
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
      },
      userInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
      },
      userImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK,
      },
      userInfoText: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
      },
      PostTime: {
        fontSize: 12,
        color: Colors.BLACK,
      },
      postText: {
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
      },
      PostImg: {
        width: '100%',
        height: 250,
        marginTop: 25,
      },
      icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
      },
      iconsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 2,
      },
      line: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: Colors.GREY,
        opacity: 0.5,
        marginTop: 15,
      },
});

export default PostCard;
