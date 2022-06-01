import {firebase} from '@react-native-firebase/firestore';

export const queryUserByEmail = Email =>
  new Promise((resolve, reject) => {
    if (Email === '') {
      resolve([]);
    } else {
      firebase
        .firestore()
        .collection('users')
        .where('Email', '>=', Email)
        .where('Email', '<=', Email + '\uf8ff')
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
