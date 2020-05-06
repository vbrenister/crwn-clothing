import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwkMbIoUkEPiG9Pfn5fKP6JAAV-1PM5Yg",
    authDomain: "crwn-db-bd50f.firebaseapp.com",
    databaseURL: "https://crwn-db-bd50f.firebaseio.com",
    projectId: "crwn-db-bd50f",
    storageBucket: "crwn-db-bd50f.appspot.com",
    messagingSenderId: "379907173731",
    appId: "1:379907173731:web:b91988b3f785eba9d77756"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.error('Could not create user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;