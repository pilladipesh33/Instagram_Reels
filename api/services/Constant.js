import firestore from '@react-native-firebase/firestore';

const fetchPostFromFirestore = async(uid) => {
    const array = [];
    return firestore()
    .collection('KeepPost')
    .doc(uid)
    .collection('Posts')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
            const docData = documentSnapshot.data();
            docData.noteId = documentSnapshot.id;
            array.push(docData);
        });
        return array;
    });
};

export default fetchPostFromFirestore;