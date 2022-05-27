import {View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import posts from '../../assets/data/posts';

const Home = () => {
  const [isPosts, setPosts] = React.useState([]);
  const [lastPost, setLastPost] = React.useState(null);

  const GetData = async () => {
    const [lastDoc, setlastDoc] = React.useState(null);
    const [Data, setData] = React.useState([]);

    const uid = useSelector(state => state?.auth?.accessToken);

    const db = firestore().collection('KeepPost').doc(uid).collection('Posts');
    const snapshot = await db.orderBy('id').get();
    if (!snapshot.empty) {
      let newDatabase = [];
      setlastDoc(snapshot.docs[snapshot.docs.length - 1]);
      for (let i = 0; i < snapshot.docs.length; i++) {
        newDatabase.push(snapshot.docs[i].data());
      }
      setData(newDatabase);
    } else {
      setlastDoc(null);
    }
  };

  React.useEffect(() => {
    GetData();
  });

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('screen').height - 85}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
