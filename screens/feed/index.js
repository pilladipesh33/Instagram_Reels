import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, IconSize, Padding, FontSize} from '../../constants/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PostCard from '../../components/PostCard';
import { Posts } from '../../assets/data/postData';

const Feed = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Feed</Text>
        <MaterialIcons
          name="add"
          size={IconSize.LARGE}
          color={Colors.BLACK}
          onPress={() => navigation.navigate('AddFeed')}
        />
      </View>
      <FlatList
      data={Posts}
      renderItem={({item}) => <PostCard item={item} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Padding,
    padding: 20,
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 25,
    color: Colors.BLACK,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
