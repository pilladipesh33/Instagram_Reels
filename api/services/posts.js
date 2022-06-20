import {firebase} from '@react-native-firebase/firestore';

export const getFeed = async(uid) => {
    try {
        return await firebase.firestore()
        .collection('posts')
        .where('creator', '==', uid)
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
            .collection('post')
            // .collection('postData')
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
});

export const addComment = (postId, creator, comment) => {
    firebase.firestore()
    .collection('posts')
    .doc(postId)
    .collection('comment')
    .add({
        creator: creator,
        comment: comment,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
    })
};

export const commentListener = (postId, setCommentList) => {
    firebase.firestore()
    .collection('posts')
    .doc(postId)
    .collection('comment')
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
        if(snapshot.docChanges().length == 0){
            return ;
        }
        let comments = snapshot.docs.map((value) => {
            const id = value.id;
            const data  = value.data();
            return {id, ...data};
        })
        setCommentList(comments);
    })
};

export const getLikeById = (postId, uid) => new Promise((resolve, reject) => {
    firebase.firestore()
    .collection('posts')
    .doc(postId)
    .collection('likes')
    .doc(uid)
    .get()
    .then((res) => resolve(res.exists));
});

export const fetchPost = async (creator,setPostFeed) => {
    try {
      const list = [];
      await firebase
        .firestore()
        .collection('posts')
        .where('creator', '==', creator)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const {creator, likeCount, media, description} =
              doc.data();
            list.push({
              creator,
              likeCount,
              media,
              description,
            });
            console.log('id', doc.id);
          });
        });
      setPostFeed(list);
    } catch (e) {
      console.log(e);
    }
  };