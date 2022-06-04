import {firebase} from '@react-native-firebase/firestore';

export const queryUserByEmail = email =>
  new Promise((resolve, reject) => {
    if (email === '') {
      resolve([]);
    } else {
      firebase
        .firestore()
        .collection('users')
        .where('Email', '>=', email)
        .where('Email', '<=', email + '\uf8ff')
        .get()
        .then(snapshot => {
          let users = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return {id, ...data};
          });
          resolve(users);
        })
        .catch(() => reject());
    }
  });
