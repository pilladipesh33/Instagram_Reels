import {View, FlatList, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import { getFeed, getUserPost } from '../../api/services/posts';
import { useSelector } from 'react-redux';

const Home = () => {
  const [postFeed, setPostFeed] = useState([]);
  const accessTokken =  useSelector(state => state?.auth?.accessToken);


  useEffect(() => {
    getFeed(accessTokken)
    .then(setPostFeed);
  },[accessTokken]);

  console.log('other', postFeed);

  return (
    <View>
      <FlatList
        data={postFeed}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('screen').height - 85}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        pagingEnabled
      />
    </View>
  );
};

export default Home;
