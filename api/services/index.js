import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {useState} from 'react';

export const GetUid = async () => {
  return await useSelector(state => state?.auth?.accessToken);
};

// export const fetchPost = async() => {
//     const uid = await GetUid();
//     console.log('UID', uid);
//     return await fetchPostFromFirestore(uid);
// };

export const GetData = async () => {
  const [lastDoc, setlastDoc] = useState(null);
  const [Data, setData] = useState([]);
  const uid = await GetUid();

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
