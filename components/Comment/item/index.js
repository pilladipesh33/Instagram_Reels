/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUserDetails} from '../../../api/services/users';
import { Colors } from '../../../constants/Theme';

const CommentItem = ({item}) => {
  const [userCommentDetail, setUserCommentDetail] = useState('');

  useEffect(() => {
    getUserDetails(item.creator, setUserCommentDetail);
  }, []);

  console.log('item', userCommentDetail);
  return (
    <View style={styles.container}>
      <Image style={styles.avator} source={{uri: userCommentDetail.Image}} />
      <View style={styles.containerText}>
        <Text style={styles.displayName}>{userCommentDetail.FullName}</Text>
        <Text>{item.comment}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
  },
  avator: {
    height: 42,
    width: 42,
    borderRadius: 21,
  },
  containerText: {
      marginHorizontal: 14,
  },
  displayName: {
      color: Colors.DARK_GREY,
      fontSize: 14,
  }
});
