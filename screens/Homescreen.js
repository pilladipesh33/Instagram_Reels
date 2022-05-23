import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React from 'react';
import Post from '../components/Post';
import posts from '../assets/data/posts';


const Homescreen = () => {
  return (
    <View>
      <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
