import {firebase} from '@react-native-firebase/firestore';

export const getFeed = async(uid) => {
    try {
        return await firebase.firestore()
        .collection('PostData')
        .doc(uid)
        .collection('Post')
        .get()
        .then((res) => {
            const posts =  res.docs.map((value) => {
                const id = value.id;
                const data = value.data();
                return {id, ...data};
            });
            return posts;
        });
    } catch (error) {
        console.log(error);
    }
};

export const getUserPost = (creator) => new Promise(async (resolve, reject) => {
    try {
        const snapshot = await firebase.firestore()
            .collection('PostData')
            .where('creator', '>=', creator)
            .where('creator', '<=', creator + '\uf8ff')
            .get();
        let users = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
        });
        resolve(users);
    } catch (error) {
        console.log(error);
    }
});

export const getOtherUserPost = (creator) => new Promise((resolve, reject) => {
    try {
        const  snapshot = firebase.firestore()
        .collection('PostData')
        .where('creator', '!=', creator)
        .where('creator', '!=', creator+'\uf8ff')
        .get()
        let users = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return {id, ...data};
        })
    }
    catch (error) {console.log(error);}
})