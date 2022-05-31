import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import UserPostDetail from '../../components/UserPostDetail/index';

const UserPost = () => {
  const [userData, setUserData] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const accessToken = useSelector(state => state?.auth?.accessToken);
  useEffect(() => {
    const getData = async () => {
      try {
        const db = firebase
          .firestore()
          .collection('PostData')
          .doc(accessToken)
          .collection('Post');
        const snapshot = await db.get();
        if (!snapshot.empty) {
          let array = [];
          setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
          for (let i = 0; i < snapshot.docs.length; i++) {
            array.push(snapshot.docs[i].data());
          }
          setUserData(array);
        } else {
          setLastDoc(null);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <FlatList
        data={userData}
        renderItem={({item}) => <UserPostDetail post={item} />}
        horizontal
      />
    </View>
  );
};

export default UserPost;

