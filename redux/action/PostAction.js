import { firebase } from "@react-native-firebase/auth";
import firestore  from '@react-native-firebase/firestore';
import { CURRENT_USER_POST_UPDATE } from "./Constant";

export const getPostByUser = (uid = firebase.auth().currentUser.uid) => async dispatch =>  {
    firestore().collection('PostData')
    .where('creator', '==', uid)
    .get()
    .onSnapshot((snapshot) => {
        let posts = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return {id, ...data};
        });
        console.log(posts);
        dispatch({type: CURRENT_USER_POST_UPDATE, currentUserPost: posts})
    })
}