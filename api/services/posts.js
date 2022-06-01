import {firebase} from '@react-native-firebase/firestore';

export const getFeed = async(uid) => {
    try {
        return await firebase.firestore()
        .collection('PostData')
        .doc(!uid)
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
}