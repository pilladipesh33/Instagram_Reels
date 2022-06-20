/* eslint-disable react-hooks/exhaustive-deps */
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, FontSize, IconSize, Padding} from '../../constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addComment, commentListener, fieldToIncrease } from '../../api/services/posts';
import { currentUser } from '../../storage/uid';
import CommentItem from './item';

const Comment = ({navigation, post, route}) => {
  const [enableShift, setEnableShift] = React.useState(false);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState('');
  const {creator, docId} = route.params;

  const handleCommentSend = () => {
    if (comment.length == 0) {
      return;
    }
    setComment('');
    addComment(docId, currentUser, comment)
  };

  useEffect(() => {
    commentListener(docId, setCommentList)
  }, []);

  console.log('comment', commentList);

  const renderItem = ({item}) => {
    return <CommentItem item={item} />
  };

  return (
    <KeyboardAvoidingView behavior="height" enabled={enableShift}>
      <View style={{paddingTop: Padding}}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Ionicons
              name="chevron-back"
              color={Colors.BLACK}
              size={IconSize.MEDIUM}
            />
          </Pressable>
          <Text style={styles.headerText}>Comments</Text>
          <Pressable
            onPress={() => handleCommentSend()}
            style={{paddingLeft: '45%'}}>
            <Ionicons
              name="md-send-sharp"
              color={Colors.BLACK}
              size={IconSize.MEDIUM}
            />
          </Pressable>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <TextInput
              value={comment}
              onChangeText={setComment}
              placeholder={'Add a comment...'}
              placeholderTextColor={Colors.GREY}
              style={styles.inputText}
              multiline={true}
              numberOfLines={3}
              onFocus={() => setEnableShift(true)}
              underlineColorAndroid={Colors.BLACK}
            />
          </View>
        </View>

        <View>
          <FlatList 
          data={commentList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Comment;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: FontSize.MEDIUM,
    color: Colors.BLACK,
    paddingLeft: '10%',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
  inputText: {
    fontWeight: '500',
    color: Colors.DARK_GREY,
    fontSize: FontSize.SMALL,
    height: 60,
    width: '100%',
    marginTop: 15,
  },
  buttonText: {
    color: Colors.RED,
    fontWeight: 'bold',
    fontSize: FontSize.SMALL,
  },
});
