import {View, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../components/Post';
import {getFeed, getUserPost} from '../../api/services/posts';
import {useSelector} from 'react-redux';
import {firebase} from '@react-native-firebase/firestore';

const Home = () => {
  const [postFeed, setPostFeed] = useState([]);
  const accessTokken = useSelector(state => state?.auth?.accessToken);

  useEffect(() => {
    let array = [];
    firebase
      .firestore()
      .collection('posts')
      .where('creator', '!=', accessTokken)
      .get()
      .then(postData => {
        postData.forEach(data => {
          const docData = data.data();
          docData.postId = data.id;
          array.push(docData);
        });
        setPostFeed(array);
        return array;
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
