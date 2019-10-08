import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDw6yLGvpjuo3Y12GjkM19Pf-2y4wbxuGc",
    authDomain: "crwn-db-1ce5c.firebaseapp.com",
    databaseURL: "https://crwn-db-1ce5c.firebaseio.com",
    projectId: "crwn-db-1ce5c",
    storageBucket: "",
    messagingSenderId: "526704872982",
    appId: "1:526704872982:web:cc794b101eb8b062c4af37",
    measurementId: "G-9MFZL0HHHP"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(firestore.doc(`users/${userAuth.uid}`))
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
