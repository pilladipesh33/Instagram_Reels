import { firebase } from "@react-native-firebase/auth";



export const currentUser = firebase.auth().currentUser.uid;